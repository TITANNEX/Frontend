import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
 
* {
  font-family: 'Kanit', sans-serif;
  }
// @font-face {
//   font-family: HVD_Comic_Serif_Pro;
//   src: url(./fonts/HVD_Comic_Serif_Pro.otf);
// }
// @font-face {
//   font-family: Sofia_Pro_Regular;
//   src: url(./fonts/Sofia_Pro_Regular.otf);
// }
// @font-face {
//   font-family: Sofia_Pro_Semi_Bold;
//   src: url(./fonts/Sofia_Pro_Semi_Bold.otf);
// }
// * {
//   font-family: Sofia_Pro_Regular;
// }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  // *::-webkit-scrollbar {
  //   width: 5px;
  // }
  // *::-webkit-scrollbar-thumb {
  //   background: #ff841a;
  //   border-radius: 0px;
  // }
  .hvd_comic_serif {
    // font-family: HVD_Comic_Serif_Pro;
    // font-family: Sofia_Pro_Semi_Bold !important;
    font-family: 'Kanit', sans-serif !important;
    font-weight: 400;
  }
  .dash_subheading {
    font-size: 16px;
  }
  .white_box {    
    box-shadow: -4px 5px 10px 2px rgb(0 0 0 / 20%);
  }
  .vision_card_panel {
    max-width: 600px;
    margin: 10px auto 0;
  }
  .menulink  div {
    font-size: 18px;
    // font-family: Sofia_Pro_Semi_Bold !important;
    font-family: 'Kanit', sans-serif !important;
    text-transform: uppercase;
  }
  div[role="button"] a {
    // text-transform: uppercase;
    // font-size: 15px;
    // font-family: Sofia_Pro_Semi_Bold !important;
    // font-family: 'Poppins', sans-serif !important;
  }
  button div {
    // font-family: Sofia_Pro_Semi_Bold !important;
    font-family: 'Kanit', sans-serif !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    // color: #ccc !important;
  }
  button {
    // font-family: Sofia_Pro_Semi_Bold !important;
    font-family: 'Kanit', sans-serif !important;
    font-weight: 600 !important;
  }
  .dash_heading_1
  {
    font-weight: 600;
    font-size:2.5rem;
    margin-bottom:20px;
  }
  .orange_head
  {
    font-size:2.5rem;
    font-weight:600;
  }
  .card_farms_head {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    color: rgb(243, 132, 30);
}
.menulink div
{
  font-size:16px !important;
  color:#fff !important;
  text-transform:capitalize;
  font-weight: 500;
}
.menulink img
{
  max-width:18px !important;
  min-width:18px !important;
}
.menulink svg
{
  margin-right: 21px;
  width:20px;

}
.icon_sidebar
{
  margin-right: 20px;
}
.card_radius {
  box-shadow: rgb(126 88 32 / 21%) -1px 1px 10px 1px !important;
  border:2px solid #7e5820;
}
.card_3_tiele
{
  color: rgb(144, 150, 152);
font-size: 24px;
font-weight: 700;
}
.card_3_subtiele
{
  font-size: 18px;
font-weight: 600;
}
.btn_yellow
{
  // background-image: linear-gradient(90deg, #ef5146  61%, #ef5146  94%, #ef5146);
  background-color: #020343;
  background-image: linear-gradient(230deg,#0d1068 6%,#020343 39%,#01022b);
border: 1px solid #f3be21  !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
border-radius:30px !important;
color:#211906 !important;
font-weight:600 !important; 
}
.btn_yellow:hover
{
  // background-image: linear-gradient(230deg, #524b9f  -6%, #524b9f  46%, #524b9f  69%);
  background-color: #f3be21;
  background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
 border-color:#f3be21 !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
color:#443c1e !important;

}
button
{
  box-shadow: 0 0 0 0px #013641 !important;
}
.or_h
{
  color: rgb(243, 132, 30);
}
button div
{
  // color: rgb(144,150,152) !important;
  font-size: 16px !important;
font-weight: 600 !important;
line-height: 1.5 !important;
margin-right: 16px !important;
}
nav button {
  // background-color: #ef5146 !important;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
  box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
  border-radius:30px !important;
  color:#211906 !important;
  font-weight:600;
  border: 1px solid #886b41 !important;
}
nav button:hover {
  background-color: #f3be21;
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
    border: 1px solid #f3be21 !important;
    color: #443c1e !important;
  border-radius:30px !important;
  
  border-color:#886b41;
  box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
}
nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
  background:transparent !important;
  box-shadow: 0px 0px 0px rgb(1 1 7 / 40%) !important;
  border:none !important;

}
nav button[aria-label="Toggle menu"] svg
{
  fill:#9d7821 !important;
  
}
@media only screen and (min-width:968px)
{
  nav button[aria-label="Toggle menu"] svg
  {
    margin-top:13px;
  }
}
.card_radius,.white_box
{
  border-radius:32px !important;
}
.lable_color Label,.lable_color div
{
  color:#2a69e2 !important;
}
.tab_radius>div>div,.tab_radius div,.tab_radius div a,.bor_rad div
{
  border-radius:30px !important;
}
.card_radius button{
  border-radius:30px !important;
}
.tab_radius div a:hover,.tab_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
{
  background-color: #d4be61;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
  color:#211906;
}
button:disabled
{
  color:#ccc !important;
}
.tab_1~div
{
  // background-color:#ccc;
  // top:0px;
  // left:-2px;
  // width:20px;
  // height:20px;
}
.tab_radius a[variant="subtle"],.tab_radius a:hover
{
  background-color: #d4be61;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
  color:#211906;
}
// .tab_1_inner>div
// {
//   background-color: #524b9f !important;
// }
.tab_1_inner>div.bg_tra
{
  background-color: transparent !important;
  margin-left:20px;
}
// tab_radius~div
// {
//   background-color: transparent !important;
// }
button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
 {
  background-color: transparent !important;
  border-color: currentColor;
}
.btn_not_found
{
  border-radius:30px !important;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
        box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
        border-radius: 30px !important;
        color: #211906 !important;
  margin-top:20px;
  padding:5px 16px;
  height:40px !important;
  border: 1px solid #886b41 !important;
}
.btn_not_found:hover
{
  background-color: #f3be21;
  background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
  border: 1px solid #f3be21 !important;
  color: #443c1e !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;
}
.mar_top_alert
{
  margin-top:20px;
}
.alert_1
  margin-bottom:20px;
}
.menulink svg
{
  fill: #9d7821;
    width: 20px;
}
.tab_radius div a
{
  height:40px !important;
  border-radius:30px !important;
}
.banner_home h3{
  color:#8b6729 !important;
  font-weight:600;
  text-align:left !important;
  font-size:30px !important;
  background: linear-gradient(87deg,#806024, #e6b519);

  background: -webkit-linear-gradient(87deg,#806024, #e6b519);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px !important;
}
.banner_home img
{
margin-right:20px;
}
.banner_home .dash_subheading{
  color: #f5f2a5;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.banner_home
{
  padding: 32px 0px !important;
  
    
  flex-direction: row !important;
    margin: auto auto 25px;
    justify-content:flex-start !important;
   
    font-weight:600;
    text-align:left !important;
    margin-top:20px !important;
}
.banner_home_1
{
  padding: 32px 32px !important;
  
    margin: auto auto 25px;
  
    font-weight:600;
    text-align:center !important;
   
    margin-top:20px !important;
}
.banner_home_locked
{
  padding: 32px 32px !important;

    margin: auto auto 25px;
    font-weight:600;
    text-align:center !important;
    margin-top:20px !important;
   
    color:#fff;
}
.banner_home_launchpad
{
  padding: 32px 32px !important;
  background-image: url('/images/app-launchpad.png');
    background-position: bottom center !important;
    height: 175px;
    
    background-size:cover;
    margin: auto auto 25px;
    border-radius: 20px 20px 20px 20px;
    font-weight:600;
    text-align:center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin-top:20px !important;
}
.banner_home_launchpad h3,
.banner_home_staking h3{
  color:#fff !important;
  margin-bottom:0px !important;
  font-size:2.5rem !important;
}
.banner_home_staking
{
  padding: 32px 32px !important;
  background-image: url('/images/app-locked.png');
    background-position: bottom center;
    height: 150px;
    
    background-size:cover;
    margin: auto auto 25px;
    border-radius: 0px 0px 20px 20px;
    font-weight:600;
    text-align:center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.withdrawbtn{
  text-align: right;
margin-bottom: 20px;

}
.tab_radius input[type="checkbox"] + div {
  // left: calc(100% - 35px) !important; // viji
}
.banner_home_1 h2{
  color:#f5f2a5 !important;
  margin-bottom:0px !important;
  margin-top:20px !important;
  font-size:18px !important;
}
.togglebtn > div input:checked + div {
  left: calc(100% - 35px) !important;
}
.banner_home h1
{
  color:#fff !important;
  font-weight:600;
  text-align:left !important;
}
.px-0{
  // padding-left: 0px !important;
    // padding-right: 0px !important;
    padding-top: 0px !important;
    // margin-left: 0px !important;
    // margin-right: 0px !important;
    // max-width:100% !important;
}
@media screen and (min-width: 576px)
{
  .px-left-right
  {
    // padding-left: 24px !important;
    //   padding-right: 24px !important;
  }
}
@media screen and (max-width: 575px)
{
  .orange_text_head
  {
    font-size:20px !important;
  }
  .banner_home img
  {
    display:none;
  }
  .banner_home
  {
    padding-left:8px !important;
    padding-right:8px !important;

  }
  .banner_home h3
  {
    font-size:25px !important;
    text-align:center !important;
  }
  .dash_subheading
  {
    text-align:center !important;

  }
  .px-left-right
  {
    // padding-left: 16px !important;
    //   padding-right: 16px !important;
  }
}
h2.card_small
{
  font-size:16px !important;
}
.card_small_1
{
  font-size:18px !important;
  font-weight:800;
}
.label_color
{
  font-weight:600;
}
.card_tile_home
{
  font-size:25px !important;
  font-weight:600 !important;
  color:#9d7821!important;
  background: linear-gradient(87deg,#806024,#e6b519);

  background: -webkit-linear-gradient(87deg,#806024,#e6b519);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.card_radius.card_radius_border
{
  position: relative;
  border-radius: 20px !important;
  align-self: baseline;
  border-radius: 32px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  min-width: 280px;
  max-width: 31.5%;
  width: 100%;
  margin: 0px 8px 32px;
}
.card_radius.card_radius_border:before
{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius:20px; 
  padding:2px; 
  background:linear-gradient(90deg,#5f82c0,#a15d46,#57adac,#9088a9,#e6bc51,#b9a872); 
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out; 
  mask-composite: exclude;
  // z-index:-1;
}
.card_radius.card_radius_border div.bor_rad,
.card_radius.card_radius_border div.inner_div_z
{
  z-index:10;
}
.tab_1_inner>div:first-child
{
  // height:20px !important;
  // width:40px;
  // background: #c4c4c4 !important;
}
.fam_left_txt 
{
  font-weight:600;
  color:#b88f1e;
  font-size:15px;
}
.fam_left_txt_white
{
  font-weight:600;
  color:#fff;
  font-size:14px;
  word-break: break-all;
    text-align: left;
}
.farm_head_row h2
{
  font-size:20px !important;
  font-weight:800;
}
.farm_head_row div div  
{
  // background-color:#083da3 !important;
  border-radius:10px !important;
}
@media only screen and (min-width:576px)
{
  .farm_head_big
  {
    font-size:35px !important;
    text-align:center;
  }
}
.farm_head_big
  {
    margin-bottom:0px !important;
    color:#fff !important;  
  }
  .farm_head_big_sm
  {
    color: #8b6729 !important;
    font-size:24px !important;
    text-align:center;
    margin-bottom:0px !important;
    background: -webkit-linear-gradient(87deg,#806024,#e6b519);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px !important;
  }
  .btn_green
{
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
border: 1px solid #886b41 !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
border-radius:30px !important;
color:#211906 !important;
font-weight:600 !important; 
}
.btn_green:hover
{
  background-color: #f3be21;
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
    border: 1px solid #f3be21 !important;
    color: #443c1e !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
border-radius:30px !important;


}

.flex_coin
{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.coin_name_title
{
  padding-left:15px;
  font-weight:600;
  font-size:20px;

}
.coin_desc
{
  text-align:left;
  margin-top:20px;
}
.coin_desc_li_one
{
  font-size:12px;
}
.coin_ul_desc
{
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
  text-align:left;
  padding-top:20px;
  padding-bottom:10px;
  border-radius:10px;
}
.coin_ul_desc.coin_ul_desc_new
{
  background-image: unset !important;

}
.coin_ul_desc li
{
  list-style-type:none;
  list-style-type: none;
    display: inline-block;
    margin: 0px 20px 10px;
    text-align: left;
}
.coin_ul_desc li .coin_name_title
{
padding-left:0px;
}
// .progres_theme>div>div
// {
//   background-color:green;
// }
.progres_theme
{
  position:relative;
}
.progress_txt
{
  // position:absolute;
  // top:8px;
  font-size:14px;
  margin-bottom:10px;
  font-weight:700;
  // color:#34c759;
  // left:15px;
}
.progress_txt_right
{
  // position:absolute;
  // top:8px;
  font-size:12px;
  // color:#7d25cc;
  // right:15px;
  margin-bottom:10px;

}
.pro_end_time
{
  font-size:12px;
  color:#db8a58;
  text-align:left;
  margin:10px 0px;
  font-weight:600;
}
@media only screen and (max-width:575px)
{
  .coin_ul_desc li
  {
    display:block !important;
  }
}
.launc_card
{
  overflow:visible !important;
  margin-top:30px !important;

}
.card_pos
{
  position:relative;
  padding-top:10px;
}
.status_card
{
  position: absolute;
    top: -15px;
    right: 20px;
    z-index: 2;
    padding: 10px;
    border-radius: 5px 5px 15px 15px;
    color: #fff;
    font-size:12px;
    text-transform:uppercase;
}
.succ_card
{
  background-color: #34c759;
}
.blue_card
{
  background-color: #083da3;
}
.yell_card
{
  background-color: #fbbe24;

}

.fam_left_txt_sm
{
  font-size:14px;
  text-align:left;
}
.mb_end
{
  margin-bottom:20px;
}
.end_Date_blue
{
  color: #f5f2a5 !important;
}
.input_grp
{
  // display: grid;
  //   grid-template-columns: 80% 20%;
  //   gap: 5px;
  display: flex;
  align-items:center;
  justify-content:center;
}
.input_grp span
{
  padding-left:5px;
  font-size:12px;
  color:#060606;
  padding-right:5px;
}
.input_grp{
  // background-color:transparent;
  background-color:transparent;
  border:1px solid #e7af71;
  border-radius:8px;
}
.input_grp input
{
  background-color:transparent !important;
  font-size:12px;
  color:#060606;

}
.input_grp input::placeholder
{
  font-size:12px;
  color:#060606;

}
.max_buy_sec
{
  display: flex;
  align-items:center;
  justify-content:center; 
}
.btn_div_grid
{
  display: grid;
  grid-template-columns: 47% 47%;
  gap: 6%;
}
.max_buy_sec .btn
{
  width:100%;
}
.btn_orange
{
  background-image: linear-gradient(
    128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
        box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
        border-radius: 30px !important;
        color: #211906 !important;
font-weight:600 !important; 
height:40px !important;
}
.btn_orange:hover
{
  background-color: #f3be21;
  background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
  border: 1px solid #f3be21 !important;
  color: #443c1e !important;
  border-radius: 30px !important;


}
.btn_blue
{
  background-color: #020343;
    background-image: linear-gradient(230deg,#0d1068 6%,#020343 39%,#01022b);
    border-color: #020343 !important;
    box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
    height:40px !important;
    color: #211906 !important;
border-radius:30px !important;
font-weight:600 !important; 
}
.btn_blue:hover
{
  background-image: linear-gradient( 
    128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
        box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
        border-radius: 30px !important;
        color: #211906 !important;
        font-weight: 600 !important;
        height: 40px !important;

}
.max_buy_sec,.max_buy_sec_1
{
margin-top:20px;
}
.max_buy_sec .btn_orange 
{
  margin-right:5px;
}
.max_buy_sec .btn_yellow  
{
  margin-left:5px;
}
.max_buy_sec_1 .btn
{
  min-width:50%;
}
.max_buy_sec_1
{
  justify-content:flex-start !important;
  display:flex;
}
.btn_grey
{
  background-color:transparent !important;
  border:1px solid #e7af71;
}
@media only screen and (max-width:575px)
{
  .btn_div_grid
  {
    display: grid;
    grid-template-columns: 100%;
    gap: 6%;
  }
}
.justify-content-end
{
  justify-content:flex-end;
}
.d-flex 
{
  display:flex !important;
}
.modal_card
{
  padding-left:0px !important;
  padding-right:0px !important;

}

.card-img {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 64px;
  max-width: 64px;
  max-height: 64px;
  width: 100%;
  padding-top: 0%;
}
.bor_rad {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 12px;
}
.cal-btn button {
  height: 0;
}
.days {
    background: #2a69e2;
    color: white;
    height: 50px;
    width: 50px;
    text-align: center;
    padding-top: 10px;
    font-size: 13px;
}
.right-cont{
  display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.farm_head_row h2 {
  font-weight: 800;
  font-size: 20px !important;
  margin-bottom: 4px;
}
.fam_left_txt_sm{
  font-size: 14px;
  text-align: left;
  // color: rgb(6, 6, 6);
  font-weight: 400;
  line-height: 1.5;
}
.end_card {
  padding: 10px 20px;
  border-radius: 10px;
  color: #211906;
  font-weight:800;
  font-size: 15px;
  text-transform: uppercase;
  background-color: #f5f2a5;
}
.end_Date_blue {
  color: rgb(42, 105, 226);
}
.unstake{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.flex.card-b {
  align-self: baseline;
  background: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  min-width: 280px;
  max-width: 31.5%;
  width: 100%;
  margin: 0px 8px 32px;
}
.rainbow-bg{
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
  background: linear-gradient(230deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;
  animation: 2s linear 0s infinite normal none running ilqnTz;
  border-radius: 32px;
}
.flex-list{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 1.5;
}
.tw-800{
  font-weight: 600;
}
.txts,.earned{
  color: rgb(6, 6, 6);
  font-size: 12px;
  font-weight: 800;
  line-height: 1.5;
  text-transform: uppercase;
}
.txts{
  padding-right: 3px;
}
.btn_yellow {
  background-color: #f3be21;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
border: 1px solid #886b41 !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;
color:#211906 !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  -webkit-box-align: center;
    align-items: center;
    border: 0px;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    // width: 100%;
    height: 40px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
    opacity: 1;
    margin-top:10px !important;
  }
  .txtdisable{
    color: rgb(189, 194, 196);
  }
  .pt-16{
    padding-top: 16px;
  }
  // .hr{
  //   background-color: rgb(230, 230, 232);
  //   height: 1px;
  //   margin: 28px auto;
  //   width: 100%;
  // }
  .card-det {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 15px 5px;
}


.card-d div{
  margin-bottom:10px;
}
.card-d div:last-child {
  font-size: 14px;
}
.align-items-center {
  align-items: center;
}
.card-det {
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 15px 10px;
  padding: 15px 10px;
}
.card-d .tw-800 {
  color: white;
}
.card-d {
  display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
}
  .disabled-btn {
    background-color: rgb(230, 230, 232);
    border-color: rgb(230, 230, 232);
    box-shadow: none;
    color: rgb(189, 194, 196);
    cursor: not-allowed;
    padding: 0px 24px;
    width: max-content;
    height: 48px;
    line-height: 1;
    outline: 0px;
    letter-spacing: 0.03em;
    border: 0px;
}
  .btn-flex{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 8px;
  }

  .stake_row
{
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top:20px;
    grid-gap:0px !important;
}
.stake_card
{
  min-width: 280px !important;
    max-width: 31.5% !important;
    width: 100%;
    margin: 0px 8px 32px !important;
    box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,rgb(25 19 38 / 5%) 0px 1px 1px;
    background-color:transparent; 
    position:relative;
  border-radius: 20px;

}
// .stake_card::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   border-radius: 20px;
//   padding: 2px;
//   background: linear-gradient(90deg,#5f82c0,#a15d46,#57adac,#9088a9,#e6bc51,#b9a872);
//   -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//       mask-composite: add, add;
//   -webkit-mask-composite: destination-out;
//   -webkit-mask-composite: exclude;
//   mask-composite: exclude;
//   z-index:1;
// }
.stake_days
{
  background-color: #9d7821;
    border: 2px solid #9d7821;
    color:#fff;
    padding:5px;
    border-radius:10px;
    max-width:50px;
    text-align:center;
    font-size:14px !important;
}
.flec_coind_div
{
  min-width: 75%;
    display: flex;
    align-items: center;
}
.mt-top-end
{
  margin-top:20px;
}
.stkae_card_info
{
  // padding: 22px 10px !important;
  // background-image: url('/images/result_preview.png');
  //   background-position: bottom center !important;
    
  //   background-size:cover;
  //   border-radius:22px;
  //   text-align:left;
}
.card-det {
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 15px 10px;
}
.tw-800
{
  color:#fff !important;
}
.fam_left_txt
{
  // font-size:12px !important;
}
.mb-btn-stake
{
  margin-bottom:15px;
  margin-top:15px;
}
.launc_card.mt-0
{
  margin-top:0px !important;
}
.modal_card.mt-0
{
  padding-top:0px !important;
}
.stake_card .white_box
{
  border-radius:25px !important;
}
.stake_row .card_pos
{
z-index:2;
}
.flex_coin.flex_btn_div
{
  display: grid;
grid-template-columns: 49% 49%;
grid-column-gap:2%;
margin-top:15px;
}
.btn_plus_minus
{
  display:flex;
  justify-content:space-between;
}
.mr-1
{
  margin-right:5px;
}
.btn_green_new
{
  background-color: #f3be21;
  background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
  border: 1px solid #f3be21 !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;
color:#211906 !important;
font-weight:600 !important; 
width: 100%;
height: 40px;
margin-top:8px;
cursor:pointer;
font-size:16px;
}
.btn_green_new:hover
{
  background-color: #f3be21;
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
    border: 1px solid #f3be21 !important;
    color: #443c1e !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;


}
.text_coimg
{
  font-size:25px !important;
}
.btn_coming
{
  margin:20px;
  max-width:270px;
  margin-left:auto;
  margin-right:auto;
}
.my-3-px
{
  margin-top:20px;
}
.dash_color_white
{
  color:#fff;
}
.twiter_card iframe
{
  width:100% !important;
}
.text-center
{
text-align:center;
}

.prog_tsx
{
  display:flex;
  justify-content:space-between;
  position:relative;
}
.progress_theme_new
{
  display:flex;
  justify-content:space-between;
  margin-top:10px;
}
.max_buy_sec .btn_yellow
{
  margin-top:0px !important;
}

.btn_yellow_rev {
  background-image: linear-gradient(
    230deg,#fde36e 6%,#ffd831 39%,#f3be21);
        border: 1px solid #f3be21 !important;
        color: #443c1e !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  -webkit-box-align: center;
    align-items: center;
    border: 0px;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 40px;
    line-height: 1;
    letter-spacing: 0.03em;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    transition: background-color 0.2s ease 0s;
    opacity: 1;
  }

  .btn_yellow_rev:hover
{
  background-color: #020343;
  background-image: linear-gradient(230deg,#0d1068 6%,#020343 39%,#01022b);
 border-color:#020343 !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
color:#211906 !important;

}

@media only screen and (min-width:576px) and (max-width:967px)
 {
  .banner_home h3
   {
     font-size:25px !important;
  }

}
.farm_stak_card .font_lin_h
{
  line-height:56px;
  font-size:20px !important;
  color: #f5f2a5 !important;
}
.font_lin_h
{
  font-size:16px !important;
}
.label_color
{
  color: #f5f2a5 !important;

}
.card_staking_bg
{
  // background-image: url('/images/coin_bg_card.png');
  // background-repeat: no-repeat;
  // background-position: top -30px right -50px;
}
.btn_yellow.btn_yellow_sm
{
  height:32px !important;
}
.desktop-icon {
  width: 200px !important;
  // margin-top: -10px;
}
button:disabled,button:disabled:hover,button:disabled:focus {
  color: #6d6868 !important;
}
.orange_text_head
{
  font-size:25px !important;
}
`

export default GlobalStyle
