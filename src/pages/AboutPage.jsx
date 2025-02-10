import Button from "../components/shared/Button";

export default function AboutPage() {
   return (
      <div className="max-w-4xl mx-auto p-8">
         <Header />
         <Features />
         <WhyChooseUs />
         <GetStarted />
         <ContactUs />
      </div>
      );
   }
   
   function Header() {
      return (
      <>
         <h1 className="text-3xl font-bold text-center mb-4">About Our Productivity Suite</h1>
         <p className="text-center mb-8">
            Welcome to our all-in-one productivity platform designed to help you organize your thoughts, manage
            your tasks, and boost your efficiency. Our suite of tools is crafted to seamlessly integrate into your
            workflow, whether you're a professional, student, or anyone looking to stay organized.
         </p>
      </>
      );
   }
   
   function Features() {
      const features = [
      { title: "📝 Notes", description: "Capture your ideas quickly and easily. Our notes feature allows you to jot down thoughts, create lists, and store important information all in one place." },
      { title: "✅ Todo Lists", description: "Stay on top of your tasks with our intuitive todo list. Prioritize, set due dates, and track your progress as you tick off completed items." },
      { title: "📌 Kanban Board", description: "Visualize your workflow with our Kanban-style board. Organize tasks into columns, move them as they progress, and get a bird’s-eye view of your projects." },
      { title: "🔄 Note-Task Integration", description: "Seamlessly convert notes into actionable tasks. Our unique integration allows you to turn your ideas into concrete action items with just a click." }
      ];
   
      return (
      <>
         <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
               <h3 className="text-lg font-semibold">{feature.title}</h3>
               <p>{feature.description}</p>
            </div>
            ))}
         </div>
      </>
      );
   }
   
   function WhyChooseUs() {
      const reasons = [
      "Intuitive and user-friendly interface",
      "Seamless integration between notes, todos, and Kanban board",
      "Cloud-based for access anywhere, anytime",
      "Regular updates and new features based on user feedback",
      "Robust security to keep your data safe"
      ];
   
      return (
      <>
         <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
         <ul className="list-disc pl-6 mb-8">
            {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
            ))}
         </ul>
      </>
      );
   }
   
   function GetStarted() {
      return (
      <div className="text-center">
         <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
         <p className="mb-4">Ready to revolutionize your productivity? Sign up now and experience the power of our integrated productivity suite.</p>
         <Button>Start Your Free Trial</Button>
      </div>
      );
   }
   
   function ContactUs() {
      return (
         <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>Have questions or need support? We're here to help! Reach out to our team at <a href="mailto:support@yourapp.com" className="text-blue-600">support@yourapp.com</a></p>
         </div>
      );
}