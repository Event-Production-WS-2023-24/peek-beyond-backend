import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectMember extends Schema.Component {
  collectionName: 'components_project_members';
  info: {
    displayName: 'Member';
    icon: 'user';
    description: '';
  };
  attributes: {
    firstname: Attribute.String & Attribute.Required;
    surname: Attribute.String & Attribute.Required;
    field_of_activity: Attribute.String & Attribute.Required;
  };
}

export interface ProjectSemester extends Schema.Component {
  collectionName: 'components_project_semesters';
  info: {
    displayName: '..';
    description: '';
  };
  attributes: {
    degree: Attribute.Enumeration<['Bachelor', 'Master']> & Attribute.Required;
    semester: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }>;
    department: Attribute.Enumeration<
      ['Medientechnik und -design', 'Digital Arts', 'Interactive Media']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.member': ProjectMember;
      'project.semester': ProjectSemester;
    }
  }
}
