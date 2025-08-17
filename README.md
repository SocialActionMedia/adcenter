# AdCenter - Advertising Campaign Management Platform

A comprehensive web portal for ad agencies to create, view, and edit advertising campaigns. Built with Next.js 15, TypeScript, and modern UI components.

## 🚀 Features

### Core Functionality
- **User Authentication** - Secure login/logout with role-based access control
- **Campaign Management** - Create, view, edit, and manage advertising campaigns
- **Dashboard Overview** - Real-time metrics and campaign performance insights
- **Analytics** - Campaign performance tracking and reporting
- **Responsive Design** - Mobile-first approach with modern UI/UX

### Campaign Features
- Campaign creation with comprehensive targeting options
- Budget management and spending tracking
- Audience targeting (demographics, locations, interests)
- Performance metrics (impressions, clicks, conversions, ROAS)
- Status management (draft, active, paused, completed, archived)

### User Management
- Role-based access control (Admin, Manager, Analyst, Viewer)
- User profiles and preferences
- Secure authentication system

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **UI Components**: Radix UI primitives
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns
- **Icons**: Lucide React

## 📁 Project Structure

```
adcenter/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── login/             # Authentication page
│   │   ├── dashboard/         # Main dashboard
│   │   ├── campaigns/         # Campaign management
│   │   ├── analytics/         # Performance analytics
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   └── layout/           # Layout components
│   ├── contexts/             # React contexts
│   ├── lib/                  # Utilities and services
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adcenter
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Credentials

For testing purposes, use these demo credentials:
- **Email**: `admin@adagency.com`
- **Password**: `password`

Additional test accounts:
- `manager@adagency.com` / `password`
- `analyst@adagency.com` / `password`

## 📱 Usage

### Authentication
1. Navigate to the login page
2. Enter your credentials
3. Access the dashboard upon successful authentication

### Creating Campaigns
1. Click "New Campaign" from the dashboard or campaigns page
2. Fill in campaign details:
   - Basic information (name, description, budget)
   - Campaign dates
   - Target audience (locations, interests, demographics)
3. Save the campaign

### Managing Campaigns
- View all campaigns with filtering and search
- Edit existing campaigns
- Monitor performance metrics
- Update campaign status

### Dashboard
- Overview of key metrics
- Recent campaign updates
- Quick actions for common tasks
- Campaign status distribution

## 🎨 Design System

The application uses a modern, professional design system with:
- **Color Palette**: Blue and indigo gradients for primary actions
- **Typography**: Inter font family for readability
- **Components**: Consistent card-based layouts
- **Responsive**: Mobile-first responsive design
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔧 Configuration

### Environment Variables
Currently using mock data. To connect to real APIs, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_endpoint
NEXT_PUBLIC_AUTH_ENDPOINT=your_auth_endpoint
```

### Mock Data
The application includes comprehensive mock data for:
- User accounts and authentication
- Sample campaigns with realistic metrics
- Campaign performance data

## 🚧 Future Enhancements

- **Real-time Analytics**: Live campaign performance updates
- **Advanced Targeting**: More sophisticated audience segmentation
- **Creative Management**: Ad creative upload and management
- **Reporting**: Advanced reporting and export capabilities
- **Integrations**: Third-party platform integrations
- **Notifications**: Real-time alerts and notifications
- **Multi-tenancy**: Support for multiple ad agencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for modern advertising agencies**
