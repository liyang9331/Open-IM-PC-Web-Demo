/**
 * 识别字符串中的url，并转换成超链接
 */
export default function (mstr: any) {
    let text = mstr
    // 识别超链接
    const domainNamePattern = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
    const ipPattern = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/;
    if (domainNamePattern.test(text) || ipPattern.test(text)) {
        // 使用正则表达式匹配 HTML 标签
        const htmlRegex = /<[^>]+>/g;
        // 匹配域名和ip
        if (domainNamePattern.test(text)) {
            // console.log("------------------------ start ----------------------");
            // console.log(text);
            let matchStr: any = "";
            // 使用正则表达式匹配 URL 路径
            if (text.indexOf("https") != -1) {
                // console.log("匹配https")
                const regex = /(https?:\/\/[^\s]+)/g;
                matchStr = text.match(regex)
            } else if (text.indexOf("http") != -1) {
                // console.log("匹配http")
                const regex = /(http?:\/\/[^\s]+)/g;
                matchStr = text.match(regex)
            }
            // console.log(matchStr)
            // return "";
            let htmls = matchStr[0].match(htmlRegex) || '';
            // console.log(typeof (htmls));
            // console.log(matchStr);
            if (htmls != "") {
                // console.log(matchStr.length-htmls.length);
                matchStr[0] = matchStr[0].substring(0, matchStr[0].length - htmls[0].length);
            }
            // const segmentation1 = mstr.substring(0,mstr.indexOf("https"))
            const segmentation2 = text.substring(text.indexOf("https"), text.indexOf("https") + matchStr[0].length)
            const str = `<a target='_blank' href='${segmentation2 == '' ? '' : segmentation2}'>${segmentation2 == '' ? '' : segmentation2}</a>`;
            // console.log(segmentation2)
            text = text.replace(segmentation2, str);
        } else if (ipPattern.test(text)) {
            // 使用正则表达式匹配 URL 路径
            //   regex = /(http?:\/\/[^\s]+)/g;
        }
    }
    return text;
}