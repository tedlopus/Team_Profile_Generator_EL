const generateManagerHTML = (manager) => {
return `<div class="card" style="width: 18rem">
<div class="card-body">
  <h5 class="card-title">John Bell</h5>
  <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 1</li>
    <li class="list-group-item">Role: ${manager.getRole()}</li>
    <li class="list-group-item">Email: ${manager.getEmail()}/li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>
</div>
`};

module.exports = generateManagerHTML;