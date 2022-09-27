import * as React from "react"

export default () => {

    React.useEffect(() => {
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;
        var isIPhone = ua.indexOf("iphone") > -1;
        console.log(ua);
        if (isAndroid) {
            window.location.replace('https://play.google.com/store/apps/details?id=net.lehnfeld.djcalendar.dj_calendar');
        } else if (isIPhone) {
            window.location.replace('https://apps.apple.com/us/app/dj-planer/id1638201550');
        }
    })

    return (
        <div>
            <a
                href="https://play.google.com/store/apps/details?id=net.lehnfeld.djcalendar.dj_calendar&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img 
                    style={{
                        width: "50%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }} 
                    alt='Get it on Google Play'
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
            </a>
            <br/>
            <a href='https://apps.apple.com/us/app/dj-planer/id1638201550'>
                <img 
                    style={{
                        width: "44%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}  
                    alt='Get it on App Store'
                    src='appstore.svg' />
            </a>
            
        </div>
    );

}