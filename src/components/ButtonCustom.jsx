export function ButtonCustom({ text, textStyles, containerStyles, icon, url, t='_self' }) {
    return (
        <>
            <button className={`z-10 rounded-lg px-8 py-3 justify-center flex gap-3 ${containerStyles}`}>
                <a target={t} href={url} download={url!=='#projects'}>
                    <div className={`${textStyles} flex gap-3`}>
                        {text}
                        <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                    </div>
                </a>
            </button>
        </>
    )
}