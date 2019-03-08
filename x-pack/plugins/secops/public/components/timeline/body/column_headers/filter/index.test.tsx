/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { mount } from 'enzyme';
import * as React from 'react';

import { ColumnHeaderType } from '../column_header';
import { defaultHeaders } from '../default_headers';

import { Filter } from '.';

const textFilter: ColumnHeaderType = 'text-filter';
const notFiltered: ColumnHeaderType = 'not-filtered';

describe('Filter', () => {
  describe('rendering', () => {
    test('it renders a text filter when the columnHeaderType is "text-filter"', () => {
      const textFilterColumnHeader = {
        ...defaultHeaders[0],
        columnHeaderType: textFilter,
      };

      const wrapper = mount(<Filter header={textFilterColumnHeader} />);

      expect(
        wrapper
          .find('[data-test-subj="textFilter"]')
          .first()
          .props()
      ).toHaveProperty('placeholder');
    });

    test('it does NOT render a filter when the columnHeaderType is "not-filtered"', () => {
      const notFilteredHeader = {
        ...defaultHeaders[0],
        columnHeaderType: notFiltered,
      };

      const wrapper = mount(<Filter header={notFilteredHeader} />);

      expect(wrapper.find('[data-test-subj="textFilter"]').exists()).toEqual(false);
    });
  });
});