# Video Crew Backend API Documentation

Base URL: `http://localhost:4000/api`

## Authentication

### Login
- **POST** `/auth/login`
- **Description**: Admin login
- **Body**:
```json
{
  "email": "nsinghrajputx@gmail.com",
  "password": "Test@123"
}
```
- **Response**:
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "nsinghrajputx@gmail.com",
    "name": "Admin"
  }
}
```

## Portfolio

### Get All Portfolio Items
- **GET** `/portfolio`
- **Description**: Get all portfolio items (public)
- **Response**:
```json
[
  {
    "_id": "item_id",
    "title": "Project Title",
    "category": "Commercial",
    "client": "Client Name",
    "description": "Project description",
    "thumbnail_url": "https://res.cloudinary.com/dtwpowrgp/image/upload/v1234567890/video-crew/images/thumb.jpg",
    "video_url": "https://res.cloudinary.com/dtwpowrgp/video/upload/v1234567890/video-crew/videos/video.mp4",
    "featured": true,
    "display_order": 1,
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
]
```

### Get Single Portfolio Item
- **GET** `/portfolio/:id`
- **Description**: Get portfolio item by ID (public)
- **Response**:
```json
{
  "_id": "item_id",
  "title": "Project Title",
  "category": "Commercial",
  "client": "Client Name",
  "description": "Project description",
  "thumbnail_url": "https://res.cloudinary.com/dtwpowrgp/image/upload/v1234567890/video-crew/images/thumb.jpg",
  "video_url": "https://res.cloudinary.com/dtwpowrgp/video/upload/v1234567890/video-crew/videos/video.mp4",
  "featured": true,
  "display_order": 1,
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

### Create Portfolio Item
- **POST** `/portfolio`
- **Description**: Create new portfolio item (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "title": "Project Title",
  "category": "Commercial",
  "client": "Client Name",
  "description": "Project description",
  "thumbnail_url": "https://res.cloudinary.com/dtwpowrgp/image/upload/v1234567890/video-crew/images/thumb.jpg",
  "video_url": "https://res.cloudinary.com/dtwpowrgp/video/upload/v1234567890/video-crew/videos/video.mp4",
  "featured": true,
  "display_order": 1
}
```

### Update Portfolio Item
- **PUT** `/portfolio/:id`
- **Description**: Update portfolio item (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "title": "Updated Title",
  "category": "Updated Category",
  "client": "Updated Client",
  "description": "Updated description",
  "featured": false
}
```

### Delete Portfolio Item
- **DELETE** `/portfolio/:id`
- **Description**: Delete portfolio item (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "success": true
}
```

## Contact

### Submit Contact Form
- **POST** `/contact`
- **Description**: Submit contact inquiry (public, sends emails)
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Corp",
  "website": "https://example.com",
  "projectType": "Commercial Video",
  "projectDetails": "Need a promotional video",
  "budget": "$5000-$10000",
  "timeline": "2-3 months",
  "referralSource": "Google Search",
  "description": "Additional project details",
  "socialMedia": "@company_handle",
  "privacyPolicy": true
}
```

### Get All Contacts
- **GET** `/contact`
- **Description**: Get all contact inquiries (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
[
  {
    "_id": "contact_id",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Corp",
    "website": "https://example.com",
    "projectType": "Commercial Video",
    "projectDetails": "Need a promotional video",
    "budget": "$5000-$10000",
    "timeline": "2-3 months",
    "referralSource": "Google Search",
    "description": "Additional project details",
    "socialMedia": "@company_handle",
    "privacyPolicy": true,
    "status": "new",
    "admin_notes": "Follow up next week",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
]
```

### Update Contact Status
- **PUT** `/contact/:id`
- **Description**: Update contact inquiry (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
```json
{
  "status": "processing",
  "admin_notes": "Client contacted, waiting for response"
}
```

## File Upload

### Upload Image
- **POST** `/upload/image`
- **Description**: Upload image file (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Content-Type**: `multipart/form-data`
- **Body**: Form data with `file` field
- **Response**:
```json
{
  "success": true,
  "url": "https://res.cloudinary.com/dtwpowrgp/image/upload/v1234567890/video-crew/images/filename.jpg"
}
```

### Upload Video
- **POST** `/upload/video`
- **Description**: Upload video file (admin only)
- **Headers**: `Authorization: Bearer <token>`
- **Content-Type**: `multipart/form-data`
- **Body**: Form data with `file` field
- **Response**:
```json
{
  "success": true,
  "url": "https://res.cloudinary.com/dtwpowrgp/video/upload/v1234567890/video-crew/videos/filename.mp4"
}
```

## Error Responses

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Access denied"
}
```

## Notes

- All admin endpoints require JWT token in Authorization header
- Contact form submission automatically sends emails to admin and user
- Default admin credentials: `admin@videocrew.com` / `password123`
- File uploads are stored on Cloudinary in `video-crew/images/` and `video-crew/videos/` folders