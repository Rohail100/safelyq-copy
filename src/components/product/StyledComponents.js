import styled from 'styled-components';

export const Slide = styled.div`
display: flex;
height: 160px;
`
export const Gap = styled.div`
width: 31.5%;
margin-right: 0px;
color: white;
padding: 0px;
`

export const Card = styled.div`
width: 35%;
border: 1px solid rgba(0, 0, 0, 0.07);
text-align: center;
padding: 10px 5px;
`

export const Portfolio = styled.div`
width: 65%;
background: url(http://res.cloudinary.com/safelyq/image/upload/v1635144319/PRODUCTION/65/1/dkd1vhdhcruh4xpdpceo.png) center center / contain no-repeat rgb(255, 255, 255);
margin-right: 5px;
color: white;
padding: 15px;
`

export const IconButton = styled.button`
background-color: rgba(66,166,238,.2);
border: 1px solid rgba(66,166,238,.2)!important;
height: 20px;
`

export const Fav = styled.div`
position: absolute;
cursor: pointer;
top: 0px;
right: 0px;
background: white;
width: 35px;
height: 35px;
border-radius: 5px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
margin: 10px;
`
export const Check = styled.div`
width: 20px;
height: 20px;
border-radius: 100%;
border: 2px solid rgb(255, 255, 255);
position: absolute;
right: 0px;
bottom: 0px;
background: green;
color: rgb(255, 255, 255);
font-size: 10px;
margin-bottom: -3px;
margin-right: -7px;
`

export const Avatar = styled.button`
width: 30px;
height: 30px;
border-radius: 100%;
`

export const ReviewReply = styled.div`
padding: 15px;
background: rgb(229, 229, 229);
position: relative;
margin-top: 15px;
`
export const Point = styled.div`
width: 0px;
height: 0px;
border-width: 0px 10px 20px;
border-right-style: solid;
border-left-style: solid;
border-right-color: transparent;
border-left-color: transparent;
border-image: initial;
border-top-style: initial;
border-top-color: initial;
border-bottom-style: solid;
border-bottom-color: rgb(229, 229, 229);
position: absolute;
margin-top: -13px;
margin-left: 10px;
top: 0px;
left: 0px;
z-index: 1;
`