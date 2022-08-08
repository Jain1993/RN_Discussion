import React, { useState, useTransition } from 'react'
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'
function generate() {
    let arr = []
    for (let index = 0; index < 10000; index++) {
        arr.push(Math.floor(Math.random() * 90000) + 10000);
    }
    return arr
}
export default WithUseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [numbers, setNumbers] = useState(generate())
    const [query, setQuery] = useState('')

    const changeHandler = (value) => {
        if (value.length) {
            setQuery(value)
            const find = numbers?.filter(el => el > value)
            // console.log(find);
            if (find) {
                // startTransition(() => {
                //     setNumbers(find)
                // })
                setNumbers(find)
            }

        } else {
            setQuery('')
            setNumbers(generate())
            // startTransition(() => {
            //     setNumbers(generate())
            // });
        }
    };
    console.log(isPending);
    return (
        <View style={{ flex: 1, padding: 15 }} >
            <TextInput onChangeText={(value) => changeHandler(value)} value={query} style={{ borderWidth: 1, marginBottom: 20, height: 30 }} />
            <ScrollView>
                {numbers.map((item, index) =>
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black' }} key={index} >{item}</Text>
                )
                }
            </ScrollView>
        </View>
    )
}
