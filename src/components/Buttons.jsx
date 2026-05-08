function Buttons({icon: Icon, btnName, bgColor, textColor}) {
    return ( 
        <button style={{backgroundColor: bgColor, color: textColor}} className={`border border-zinc-500 px-5 py-2 rounded-[8px] cursor-pointer`}> {btnName ? btnName : <Icon size={20} />}</button>
     );
}

export default Buttons;