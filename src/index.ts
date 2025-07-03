import {} from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'
import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import { uiMenu } from './ui'

export function main() {
    ReactEcsRenderer.setUiRenderer(uiMenu)
}
