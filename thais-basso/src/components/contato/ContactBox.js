import React from 'react';
import { CallToAction } from '../common/interface/UI';

export default function ContactBox(props) {
    const box = props.box;
    return (
        <div className="col-lg-4 col-md-12 p-4 box">
            <div className={`${box.name} shadow-custom p-4`}>
                {box.icon}
                <p className="mt-4">{box.name}</p>
                <p className="mt-2">
                    <b>{box.content}</b>
                </p>
                <CallToAction text={box.action.text} href={box.action.href} alt={box.action.alt} target="_blank" className="mx-auto text-center w-100" />
            </div>
        </div>
    );
}
