export default function ApplyPage() {
  return (
    <main>
      <h1>Apply Now</h1>
      <p>Fill out the form to begin your credit repair journey.</p>

      <form className="grid gap-4 mt-4 max-w-md">
        <input type="text" placeholder="Your Name" required className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" required className="border p-2 rounded" />
        <textarea placeholder="Why do you need credit repair?" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </main>
  );
}
