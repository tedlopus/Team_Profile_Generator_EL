const generateEngineerHTML = (engineer) => {
  return `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">John Bell</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: 1</li>
      <li class="list-group-item">Role: ${engineer.getRole()}</li>
      <li class="list-group-item">Email: ${engineer.getEmail()}/li>
      <li class="list-group-item">Github: ${engineer.getGithub()}</li>
    </ul>
  </div>
  </div>
  `};
  
  module.exports = generateEngineerHTML;