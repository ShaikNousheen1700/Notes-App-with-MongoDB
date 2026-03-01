const API = 'http://localhost:5000/api';
const token = localStorage.getItem('token');

// Redirect to login if no token
if (!token && !location.pathname.endsWith('login.html') && !location.pathname.endsWith('signup.html')) {
  location.href = 'login.html';
}

// If on index page
if (location.pathname.endsWith('index.html') || location.pathname.endsWith('/')) {
  document.getElementById('userGreeting').textContent = localStorage.getItem('username') || '';
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token'); localStorage.removeItem('username'); location.href='login.html';
  });

  async function loadEntries(){
    try {
      const res = await fetch(API + '/entries', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
      const entries = await res.json();
      const container = document.getElementById('entries');
      container.innerHTML = '';
      if (!Array.isArray(entries)) { container.textContent = entries.message || 'Could not load'; return; }
      entries.forEach(e => {
        const tpl = document.getElementById('entryTemplate');
        const node = tpl.content.cloneNode(true);
        node.querySelector('.entry-title').textContent = e.title;
        node.querySelector('.entry-date').textContent = new Date(e.createdAt).toLocaleString();
        node.querySelector('.entry-mood').textContent = e.mood ? ('Mood: ' + e.mood) : '';
        node.querySelector('.entry-content').textContent = e.content;
        const editBtn = node.querySelector('.edit-btn');
        const delBtn = node.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editEntry(e));
        delBtn.addEventListener('click', () => deleteEntry(e._id));
        container.appendChild(node);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function saveEntry(){
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const mood = document.getElementById('mood').value.trim();
    if (!title || !content) return alert('Title and content required');
    try {
      const res = await fetch(API + '/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
        body: JSON.stringify({ title, content, mood })
      });
      if (res.ok) {
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        document.getElementById('mood').value = '';
        loadEntries();
      } else {
        const data = await res.json();
        alert(data.message || 'Could not save');
      }
    } catch (err) {
      alert('Network error');
    }
  }

  async function deleteEntry(id){
    if (!confirm('Delete this entry?')) return;
    try {
      const res = await fetch(API + '/entries/' + id, { method: 'DELETE', headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
      if (res.ok) loadEntries();
      else { const d = await res.json(); alert(d.message || 'Could not delete'); }
    } catch (err) { alert('Network error'); }
  }

  function editEntry(entry){
    const title = prompt('Edit title', entry.title);
    if (title === null) return;
    const content = prompt('Edit content', entry.content);
    if (content === null) return;
    const mood = prompt('Edit mood (optional)', entry.mood || '');
    fetch(API + '/entries/' + entry._id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') },
      body: JSON.stringify({ title, content, mood })
    }).then(res => { if (res.ok) loadEntries(); else res.json().then(d=> alert(d.message || 'Error')); });
  }

  document.getElementById('saveBtn').addEventListener('click', saveEntry);
  loadEntries();
}

// If on login/signup pages, redirect if already logged in
if ((location.pathname.endsWith('login.html') || location.pathname.endsWith('signup.html')) && localStorage.getItem('token')) {
  location.href = 'index.html';
}
