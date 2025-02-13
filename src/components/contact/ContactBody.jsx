import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("Botón clickeado"); 
  
    setLoading(true);
    setSuccess(null);
  
    const payload = {
      from: formData.email,
      message: formData.message,
    };
  
    try {
      const response = await axios.post(
        "https://belfor-portfolio-utility.duckdns.org/mail/send",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Respuesta del servidor:", response); 
  
      if (response.status === 200) {
        setSuccess("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess("An error occurred. Try again later.");
    }
  
    setLoading(false);
  };
  
  console.log("Form component renderizado");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
              I'd love to hear from you and discuss your project! Feel free to
              reach out, and I'll get back to you as soon as possible.
            </p>
            <p>
              This form will send your message to me at <strong>b.acuna.cas@gmail.com</strong>.
            </p>
          </div>

         
          <form className="mt-3 flex flex-col gap-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder="Message"
              />
            </div>

            <div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

            {success && (
              <p className={`text-sm mt-2 ${success.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
