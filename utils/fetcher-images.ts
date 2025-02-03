

export async function FetcherImage ( key: string, uri: string, imageName: string, data: FormData)  {
    const response = await fetch(uri)
    const blob = await response.blob();

    //@ts-ignore
    data.append(key,{
        uri: uri,
        name: `${imageName}.png`,
        type: blob.type,
    })
}