import React from 'react';
import { Image } from 'react-native';

interface IEmblemProps {
    uri: string;
    width: number;
    height: number;
}

export default function Emblem( {uri, width, height}: IEmblemProps ) {
    return (
        <Image
            style={{width: width, height: height}}
            source={{
                uri: uri,
            }}
        />
    )
}