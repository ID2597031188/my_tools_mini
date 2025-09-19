import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

import { Button } from '@nutui/nutui-react-taro'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View>
        <Text>Hello world!</Text>
      </View>
      <View>
        <Button type="primary">Primary</Button>
      </View>
    </View>
  )
}
