import React from 'react';
import { CallToAction, ShadowBox } from '../common/interface/UI';

export default function ContactBox(props) {
    const box = props.box;
    return (
        <div className="col-lg-4 col-md-12 p-4 box">
            <ShadowBox className={box.name}>
                {box.icon}
                <p className="mt-4">{box.name}</p>
                <p className="mt-2">
                    <b>{box.content}</b>
                </p>
                <CallToAction text={box.action.text} href={box.action.href} alt={box.action.alt} target="_blank" rel="noreferrer" className="mx-auto text-center w-100" />
            </ShadowBox>
        </div>
    );
}
