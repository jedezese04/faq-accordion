import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Accordion from "./components/Accordion";
import StarIcon from "./components/StarIcon";
import SwitchThemeButton from "./components/SwitchThemeButton";

export default function Home() {

  return (
    <main className="grid h-screen place-items-center p-8">
      <Card className="w-auto">
        <CardHeader>
          <div className="flex items-center p-4">
            <StarIcon />
            <h1 className="text-3xl font-bold ml-3">FAQs</h1>
          </div>
        </CardHeader>
        <CardBody>
          <Accordion
            data={[
              {
                title: "What payment methods do you accept?",
                content:
                  "We accept a variety of payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. Your transaction security is our top priority, and all payments are securely processed.",
              },
              {
                title: "How can I track my order?",
                content:
                  "Once your order is shipped, we will send you a confirmation email with a tracking number. You can use this number on our website to track the status of your order in real-time.",
              },
              {
                title: "What is your return policy?",
                content:
                  "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. Please ensure that the items are in their original condition.",
              },
              {
                title: "Do you offer international shipping?",
                content:
                  "Yes, we ship worldwide! Shipping costs and delivery times vary depending on the destination. Please refer to our shipping policy for detailed information.",
              },
              {
                title: "Can I change or cancel my order after placing it?",
                content:
                  "Orders can be changed or cancelled within 24 hours of placing them. Please contact our customer service team immediately if you need to make any changes to your order.",
              },
            ]}
          />
        </CardBody>
      </Card>
      <SwitchThemeButton />
    </main>
  );
}
