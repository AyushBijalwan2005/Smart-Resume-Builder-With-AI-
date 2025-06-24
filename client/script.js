document.getElementById('resumeForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('http://localhost:5000/api/resume/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const saved = await res.json();
  if (saved._id) {
    document.getElementById('preview').innerText = `Resume saved! ID: ${saved._id}`;
  } else {
    alert('Error saving resume');
  }
});