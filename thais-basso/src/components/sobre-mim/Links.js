import React from "react";

export default function Links(props) {
    function mountGroup(itemsList) {
        return itemsList.map((item) => (
            <div className="item pt-1">
                <span className={item.name}>
                    <a href={item.href} target="_blank" rel="noopener">
                        <i className={`${item.icon} fa-1x`} />
                        {item.content}
                    </a>
                </span>
            </div>
        ));
    }

    return (
        <>
            <div class="col-lg-1 col-md-0"></div>
            <div className="col-lg-5 col-md-12">{mountGroup(props.links[0])}</div>
            <div className="col-lg-5 col-md-12">{mountGroup(props.links[1])}</div>
            <div class="col-lg-1 col-md-0"></div>
        </>
    );
}
