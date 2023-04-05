### Page Title

''' html

<h1>class "title" > Text </h1>
'''

''' css
.title{
margin-top:0;
text-align:center;
text-transform: uppercase

}
'''

### EventBoard

''' html

<div> class="EventBoard"> Even Cards </div>

'''

''' css
.eventBoard{
display:grid;
grid-template-colums:repeat(auto-fit,monmax(240px, auto));
gap:24px;
padding-left:16px;
padding-right:16px;

}
'''

### Event

''' html

<div class="event">
    <h2 class="title">{name}</h2>
    <p class="info">
    <i class="icon"></i>
        Location
    </p>
    <p class="info">
    <i class="icon"></i>
        Speaker
    </p>
    <p class="info">
    <i class="icon"></i>
        StartDate
    </p>
    <p class="info">
    <i class="icon"></i>
        Duration
    </p>
    <span class="chip free|paid|vip">Event type</span>
</div>

Icons:
-FaMapMarkerAlt
-FaUserAlt
-FaCalendarAlt
-FaClock

'''css
.event{
position:relative;
border:2px dashed black;
padding:8px;
border-radius:4px;
}

.title{
margin-top:0;
font-size:14px;
line-height:24px;
Letter-spasing:0.5px;
text-transform:uppercase;
}

.info{
display:flex;
align-items:center;
margin-top:0;
margin-bottom:8px;
color:var(--color-primary-text);
font-size:16px;
font-weight:400;
Letter-spasing:0.25px; 
}
.icon{
display:block;
margin-right:8px;
color:var(--color-secondary-text);
}

.chip{
position:absolute;
top:4px;
right:4px;
padding:4px 8px;
border-radius:4px;
text-transform:uppercase;
background-color:#000;
color:3fff;
}

.free{
background-color: var(--color-green);
}
.paid{
background-color: var(--color-blue);
}
.vip{
background-color: var(--color-red);
}


