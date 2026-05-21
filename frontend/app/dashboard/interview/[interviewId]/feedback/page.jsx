import React from 'react'
import { Button } from '@/components/ui/button';
// import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from 'lucide-react';

const FeedbackPage = () => {
    return (
        <main>
            <section className="w-full max-w-7xl mx-auto">
                <div className="space-y-3">
                    <h2 className="text-green-400 font-bold lg:text-3xl md:text-2xl text-xl">Congratulations!</h2>
                    <h3 className="text-black font-bold lg:text-2xl md:text-xl text-lg">Here is your interview feedback.</h3>
                    <h4 className="text-blue-800 lg:text-xl md:text-lg text-md">Your overall interview rating is 7/10</h4>
                    <p className='text-sm'>Find below interview question with correct answer, Your answer and feedback for improvement</p>
                </div>
                <div>
                    
                    <Collapsible className="rounded-md data-open:bg-muted">
                        <CollapsibleTrigger render={<Button variant="ghost" className="w-full">Product details
                            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" /></Button>} />
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div>
                                This panel can be expanded or collapsed to reveal additional
                                content.
                            </div>
                            <Button size="xs">Learn More</Button>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </section>
        </main>
    )
}

export default FeedbackPage