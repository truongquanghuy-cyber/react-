import React from 'react';
// <></> là viết tắt của Fragment
import { Card } from './components/card'
import {Content} from './components/content'
import {Footer} from './components/footer'
import {Header} from './components/header'

import {Inline} from './buoi-2/inline/inline'
import {Databinding} from './buoi-2/data-binding/data-binding'
import { HandleEvent } from './buoi-2/handle-event/handle-event'
import {Global} from './buoi-2/global/global'

import {Module} from './buoi-2/module/module'
import { Props } from './buoi 3/props/props';
import CompState from './state/state'
import { BaitapProps } from './buoi 4/bai-tap/bai-tap';
import { TangGiamFront } from './buoi 4/bai-tap/tanggiamfont';
import { ThayDoiMauXe } from './buoi 4/bai-tap/thaydoimauxe';
import Gallery from './buoi 4/bai-tap/gallery';
import { Gallery2 } from './buoi 4/bai-tap/gallery2';
export function App() {
    // phải bao bọc 1 thẻ cha(bắt buộc)
    return (
        <>
         {/* gọi card nhiều lần  */}
            {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Content></Content>
            <Footer></Footer>
            <Header></Header> */}
            {/* <Inline></Inline> */}
            {/* <Databinding></Databinding> */}
            {/* <HandleEvent></HandleEvent> */}
            {/* <Global></Global> */}
            {/* <Module></Module> */}
            {/* <Props></Props> */}
            {/* <CompState></CompState> */}
            {/* <BaitapProps></BaitapProps>    */}
            {/* <TangGiamFront></TangGiamFront> */}
            {/* <ThayDoiMauXe></ThayDoiMauXe> */}
            <Gallery></Gallery>
            <Gallery2></Gallery2>
        </>
                 
    );
}