import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import ParagraphSection from "./ParagraphSection";
import TitleSection from "./TitleSection";

export default function ContactSection(){
    return (
        <section className="container mx-auto" id="contact">
            <div className="bg-gray-900 flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full">
                    <div className="lg:py-16 lg:px-20 md:p-14 p-10">
                        <TitleSection left>Contact</TitleSection>
                        <ParagraphSection left>Beberapa cara menghubungi saya</ParagraphSection>
                        <ContactItem 
                            label="Mail"
                            value="muhamadiqbalrivaldi03@gmail.com"
                            icon="/mail.svg"
                            className="mt-10"
                        ></ContactItem>
                        <ContactItem 
                            label="Phone"
                            value="085156574497"
                            icon="/phone.svg"
                            className="mt-6"
                        ></ContactItem>
                        <ContactItem 
                            label="Twitter"
                            value="@iqbal"
                            icon="/twitter.svg"
                            className="mt-6"
                        ></ContactItem>
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                    <div className="p-10">
                        <form action="" >
                            <div className="flex">
                                <div className="w-6/12 px-4">
                                    <Field 
                                        label="Name"
                                        name="name"
                                        type="text"
                                    />
                                </div>
                                <div className="w-6/12 px-4">
                                    <Field 
                                        label="Email"
                                        name="email"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="px-4">
                                <Field 
                                    label="Subject"
                                    name="subject"
                                    type="text"
                                />
                            </div>
                            <div className="px-4">
                                <Field 
                                    label="Message"
                                    name="message"
                                    type="textarea"
                                />
                            </div>
                            <div className="text-right px-4">
                                <Button 
                                    variant="white"
                                >Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}