export default function Manager({ manager }) {
  return (
    <div className="shadow-sm card mb-3">
      <div className="card-header">
        <i class="bi bi-controller"></i> Manager
      </div>
      <div className="card-body">
        <p className="card-text">{manager}</p>
      </div>
    </div>
  );
}
