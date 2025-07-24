export function ButtonCustom({ text, textStyles, containerStyles, icon, url, t='_self' }) {
    return (
        <>
            <a target={t} href={url} download={url!=='#projects'} className={`z-10 rounded-lg  cursor-pointer px-8 py-3 justify-center flex gap-3 ${containerStyles}`}>
           
                    <div className={`${textStyles} flex gap-3`}>
                        {text}
                        <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                    </div>
                
            </a>
        </>
    )
}