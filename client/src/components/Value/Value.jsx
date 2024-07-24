import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="flexCenter paddings innerWidth v-container">
        {/* left side*/}
        <div className="flexColStart v-left">
          <div className="img-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
        {/* right side*/}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>
          <Accordion className="accordion" preExpanded={[0]} allowMultipleExpanded={false}>
             {
                data.map((object,i) => {
                    const [className, setClassName] = useState(null);
                    return (
                     <AccordionItem className={`accordionItem ${className}`} key={i}>
                       <AccordionItemHeading>
                        <AccordionItemButton className="flexCenter accordionButton">
                            <AccordionItemState>
                                {({expanded})=> 
                                  expanded ? setClassName("expanded") : setClassName("collapsed")
                                }
                            </AccordionItemState>
                            <div className="flexCenter icon">
                                {object.icon}
                            </div>
                            <span className="primaryText">
                                {object.heading}
                            </span>
                            <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20}/>
                            </div>
                        </AccordionItemButton>
                       </AccordionItemHeading>
                       <AccordionItemPanel>
                        <p className="secondaryText">
                            {object.detail}
                        </p>
                       </AccordionItemPanel>
                     </AccordionItem>
                    )
                })
             }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
