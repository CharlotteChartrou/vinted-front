"use strict";window.initConsentBanner=function(n){function e(){var n=document.querySelector("#onetrust-consent-sdk");n&&(n.style.display="none")}function t(){var n=document.querySelector("#onetrust-policy-text > a");n&&(n.href="//"+window.location.hostname+"/cookie-policy")}function o(n){var e=("; "+document.cookie).split("; "+n+"=");if(e.length>=2)return e.pop().split(";").shift()}function a(n){window.OneTrust.setDataSubjectId(n);var e=window.OneTrust.GetDomainData().ConsentIntegrationData;e.consentPayload.identifier=n,e.consentPayload.isAnonymous=!1;var t=new XMLHttpRequest;t.open("POST",e.consentApi,!0),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e.consentPayload))}function i(n){return o("OptanonConsent").includes(encodeURIComponent(n))}function d(){return!!o("AMZN-Token")}function s(){"undefined"!=typeof window.apstag&&(l&&i(f.amazonAdvertising)?window.apstag.rpa({hashedRecords:[{type:"email",record:l}]}):window.apstag.dpa()),d()&&!i(f.targeting)&&(document.cookie="AMZN-Token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")}function r(){var n=window.Optanon.getDataSubjectId(),e=o("OptanonAlertBoxClosed"),t=document.getElementById("ot-pc-desc");if(-1!==t.innerHTML.indexOf(n))window.removeEventListener("bannerLoaded",r,!1);else if(e){var a=new Date(e),i="",d="";switch(document.documentElement.lang){case"es":i="ID de su consentimiento",d="Fecha del consentimiento";break;case"fr":i="Identifiant du consentement",d="Date du consentement";break;default:i="Consent ID",d="Consent Date"}t.innerHTML+="</br></br><b>"+i+": </b>"+n+"</br><b>"+d+": </b>"+a}}var c=n.userId,u=n.isWebview,w=n.hideConsent,p=n.hasAdsAmazonPublisherAudience,l=n.hashedEmail,f={targeting:"C0004:1",amazonAdvertising:"C0015:1"};window.OptanonWrapper=function(){if((u||w)&&e(),window.dispatchEvent(new Event("bannerLoaded")),t(),c){var n=window.OneTrust.getDataSubjectId();o("OptanonAlertBoxClosed")&&n!==c&&a(c)}p&&s()},window.addEventListener("bannerLoaded",r)},window.dispatchEvent(new Event("consentBannerScriptLoaded"));