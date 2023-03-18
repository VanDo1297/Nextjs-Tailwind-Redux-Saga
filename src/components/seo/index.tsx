import Head from "next/head";

interface IProps {
    title?:string,
    description?:string,
    images?:string[]
}

const SeoComponent = (props: IProps) => {
    const { title, description, images } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
    )
}

export default SeoComponent;