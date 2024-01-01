import styles, {customColor} from "../style";
import Button from "./Button";
import React from "react";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col ${customColor.cardsBackground} rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Kontakt mig</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Du kan kontakte mig ved at sende en e-mail til:
                <address>
                    danieal3@hotmail.com
                </address>
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button styles="mt-10"/>
        </div>
    </section>
);

export default CTA;