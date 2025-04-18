function toggleReview(id) {
  const content = document.getElementById(id);
  const btn = document.querySelector(`button[onclick="toggleReview('${id}')"]`);
  
  if (content.style.display === "none") {
      content.style.display = "block";
      btn.innerHTML = btn.innerHTML.replace("▼", "▲");
  } else {
      content.style.display = "none";
      btn.innerHTML = btn.innerHTML.replace("▲", "▼");
  }
}