export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Credit Repair App</h1>
      <a href="/apply">
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Apply Now
        </button>
      </a>
    </main>
  );
}
