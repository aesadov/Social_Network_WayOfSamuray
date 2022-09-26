import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>)
        const instance = component.getInstance() as any
        expect(instance.state.status).toBe('it-kamasutra.com')
    })
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>)
        const root = component.root as any
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test(`after creation <input> shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>)
        const root = component.root as any
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>)
        const root = component.root as any
        let span = root.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra.com')
    })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>)
        const root = component.root as any
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com')
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={mockCallback}/>)
        const instance = component.getInstance() as any
        instance.deactivateEditeMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})