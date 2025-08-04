const API_URL = "http://localhost:3000";

async function fetchMenu() {
  const res = await fetch(`${API_URL}/menu`);
  const data = await res.json();
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.id}. ${item.name} - $${item.price}`;
    menuList.appendChild(li);
  });
}

async function placeOrder() {
  const menuId = parseInt(document.getElementById('menu-id').value);
  const res = await fetch(`${API_URL}/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ menuId })
  });
  const result = await res.json();
  alert(result.message);
}

window.onload = fetchMenu;
