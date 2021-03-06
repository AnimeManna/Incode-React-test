import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import Home from '../src/components/Home'


describe('<Home />', ()=>{
    describe('render()', ()=>{
        test('render the components',()=>{
            const wrapper = shallow(<Home />)
            const component = wrapper.dive()

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})



