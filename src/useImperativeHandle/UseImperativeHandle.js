import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

// example to understand forwardRef use
const Child = (props) => {
    // console.log('Child Render');
    return (
        <View style={{ alignItems : 'center' }}>
            <TextInput
                ref={props.ref}
                style={{ borderWidth: 1, width: 200, }}
            />
        </View>
    )
}
// const ForwardRefChild = forwardRef(Child);

const UseImperativeHandle = () => {
    let parentRef = useRef(null)
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Child ref={parentRef} />
            <Button title='Focus' onPress={() => parentRef.current.focus()} />
        </View>
    )
}

// const Child = (props, ref) => {
//     const [count, setCount] = useState(0)
//     // console.log('Child render');
//     useImperativeHandle(ref, () => {
//         return {
//             increaseCount() {
//                 console.log('Child Render');
//                 setCount(count + 1)
//             },
//             decreaseCount() {
//                 setCount(count - 1)
//             }
//         }
//     }, [count])
//     return (
//         <View style={{ alignItems: 'center' }}>
//             <Text style={{ marginTop: 10 }} >{count}</Text>
//         </View>
//     )
// }

// const ForwardRefChild = forwardRef(Child);

// const UseImperativeHandle = () => {
//     const [count, setCount] = useState(0)
//     let parentRef = useRef('parentRef')
//     console.log('Parent render');
//     return (
//         <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//             <ForwardRefChild count={count} ref={parentRef} />
//             <Button title='Increase Count' onPress={() => parentRef.current.increaseCount()} />
//             <Button title='Decrease Count' onPress={() => parentRef.current.decreaseCount()} />
//         </View>
//     )
// }

export default UseImperativeHandle

const styles = StyleSheet.create({})