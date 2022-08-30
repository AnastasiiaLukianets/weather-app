import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
//import { AccordionItemHeading } from 'react-accessible-accordion/dist/types/components/AccordionItemHeading';

const Forecast = ({ data }) => {
  //return 'hola amigos';
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {/* Hellooo */}
                    <div className='daily-item'>
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
