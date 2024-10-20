import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the basics of Angular framework',
      imageUrl: 'https://example.com/angular.png',
      videoUrl: 'https://example.com/angular-intro.mp4',
      textContent: 'Angular is a platform for building mobile and desktop web applications...',
      interactiveContent: 'https://example.com/angular-interactive',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into advanced JavaScript topics',
      imageUrl: 'https://example.com/javascript.png',
      videoUrl: 'https://example.com/advanced-js.mp4',
      textContent: 'In this course, we will explore advanced JavaScript concepts such as closures, prototypes...',
      interactiveContent: 'https://example.com/js-interactive',
    },
    // Add more courses here
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
