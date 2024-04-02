import { PhoneCall, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const contacts = [
    {
      name: "phone",
      Icon: PhoneCall,
      entries: ["+91 9087896566", "+01 1120986766", "+12 9087678987"],
    },
    { name: "email", Icon: Mail, entries: ["support@tenderview.com"] },
  ];

  return (
    <div className="container relative flex justify-center items-center pt-20 p-0 sm:container">
      <div className="mx-auto flex flex-col border justify-center  rounded-xl md:flex-row w-full md:w-fit">
        {/* section1 */}
        <div className="grid gap-4 p-10 w-full justify-center ">
          <h1 className="text-3xl font-medium text-center md:text-start">
            Contact Us
          </h1>
          <div className="contactPageClass w-[300px]">
            <form action="">
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Input placeholder="Name" />
                </div>
                <div className="grid gap-1 py-2">
                  <Input placeholder="Email" />
                </div>
                <div className="grid gap-1 py-2">
                  <Textarea placeholder="Message" />
                </div>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>

        {/* section2 */}
        <div className="grid gap-4 bg-gray-200 p-10 rounded-br-lg rounded-tr-lg w-full md:w-fit">
          <div className="grid gap-10 content-center">
            <h3 className="text-xl font-medium">Our Contacts</h3>
            {contacts.map((item) => {
              return (
                <div className="flex gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-200 text-gray-600">
                    <item.Icon className="w-1/3 h-1/3" />
                  </div>

                  <div className="flex flex-col justify-center">
                    {item.entries.map((entry) => {
                      return (
                        <p className="text-muted-foreground font-medium text-sm">
                          {entry}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
