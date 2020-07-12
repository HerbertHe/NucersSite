import Head from "next/head"
import dynamic from "next/dynamic"
const articleStyle = require("@styles/pages/article.css")

const MarkdownRenderer = dynamic(import("@components/posts/MarkdownRenderer"), {
    ssr: false,
})

import NavBar from "@components/common/NavBar"
import MarkdownOutline from "@components/posts/MarkdownOutline"
import CopyrightSide from "@components/common/CopyrightSide"
import AdsSide from "@components/common/AdsSide"
const syntaxMd = require("../../docs/syntax.md")

export default () => {
    return (
        <div className={articleStyle.articlePage}>
            <Head>
                <title>Nucers社区 | 搜索语法设计</title>
            </Head>
            <NavBar />
            <div className={articleStyle.articleLeft}>
                <MarkdownRenderer content={syntaxMd.default} />
            </div>
            <div className={articleStyle.articleRight}>
                <MarkdownOutline content={syntaxMd.default} />
                <CopyrightSide />
            </div>
        </div>
    )
}