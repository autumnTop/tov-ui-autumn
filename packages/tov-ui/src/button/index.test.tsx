import { mount } from '@vue/test-utils'
import { Button } from 'tov-ui'
import { expect } from 'vitest'

describe('button', () => {
  it('should work', () => {
    const wr = mount(<Button type="primary">123</Button>)
    const btnEl = wr.find('button')
    const hasPromay = btnEl.element.classList.contains('tov-button--primary')
    expect(hasPromay).toBe(true)
    wr.unmount()
  })
  it('size', () => {
    const wr = mount(<Button size="small">123</Button>)
    const btnEl = wr.find('button')
    const hasPromay = btnEl.element.classList.contains('tov-button-size--small')
    expect(hasPromay).toBe(true)
    wr.unmount()
  })
  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wr = mount(<Button onClick={handleClick}>123</Button>)
    wr.trigger('click')
    expect(clickState).toBe(true)
    wr.unmount()
  })
})
