# Daily Medicine Logger - MedTracker Pro

A comprehensive medication management and tracking system built with Next.js, designed to help healthcare providers and caregivers monitor patient medication adherence and manage daily medication schedules.

## 🌟 Features

### 📊 Dashboard Overview
- Real-time medication statistics and metrics
- Daily adherence rates and completion tracking
- Recent medication logs with status indicators
- Upcoming medication schedules
- Patient overview with total count and activity

### 👥 Patient Management
- Complete patient profiles with detailed information
- Medical conditions and emergency contact management
- Patient search and filtering capabilities
- Active medication tracking per patient
- Patient registration and profile editing

### 💊 Medication Management
- Comprehensive medication database
- Dosage, frequency, and administration route tracking
- Prescription details and prescribing physician information
- Side effects and special instructions documentation
- Medication search and filtering by patient

### 📅 Daily Medication Logging
- Interactive daily medication schedule
- Real-time medication status tracking (taken/missed/delayed)
- Time-based medication logging with notes
- Calendar integration for historical tracking
- Bulk medication status updates

### 📈 Reports & Analytics
- Patient adherence rate analysis
- Medication-specific compliance statistics
- Weekly and monthly trend reports
- Exportable reports for healthcare providers
- Visual progress tracking with charts

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Notifications**: Sonner toast notifications

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedAlDeep/Daily-Medicin-Logger.git
   cd Daily-Medicin-Logger
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── daily-log/         # Daily medication logging
│   ├── medications/       # Medication management
│   ├── patients/          # Patient management
│   ├── reports/           # Analytics and reports
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard home page
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## 🎯 Usage

### Getting Started
1. **Dashboard**: View overall medication statistics and daily overview
2. **Patient Management**: Add and manage patient profiles with medical information
3. **Medication Setup**: Configure medications for each patient with dosages and schedules
4. **Daily Logging**: Track daily medication intake with status updates
5. **Reports**: Analyze adherence patterns and generate compliance reports

### Key Workflows
- **Adding a Patient**: Navigate to Patients → Add New Patient → Fill required information
- **Setting up Medications**: Go to Medications → Add Medication → Assign to patient
- **Daily Tracking**: Use Daily Log to mark medications as taken/missed with timestamps
- **Viewing Reports**: Access Reports for adherence analytics and trends

## 🔧 Configuration

### Environment Setup
The application uses mock data by default. For production use:
1. Set up a database (recommended: PostgreSQL, MongoDB, or Supabase)
2. Configure environment variables for database connection
3. Implement API routes for data persistence
4. Add authentication for secure access

### Customization
- **Styling**: Modify `tailwind.config.ts` for theme customization
- **Components**: Update components in `components/ui/` for design changes
- **Data Models**: Extend mock data structures for additional fields

## 📱 Features in Detail

### Patient Profiles
- Personal information (name, age, contact details)
- Medical history and conditions
- Emergency contact information
- Medication history and active prescriptions

### Medication Tracking
- Comprehensive medication database
- Scheduled dosing times and frequencies
- Administration routes and special instructions
- Side effect monitoring and documentation

### Compliance Monitoring
- Real-time adherence rate calculations
- Historical compliance trends
- Missed dose tracking and alerts
- Patient-specific performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for consistent styling

## 🔮 Future Enhancements

- [ ] Mobile app development
- [ ] Integration with pharmacy systems
- [ ] Automated medication reminders
- [ ] Healthcare provider dashboard
- [ ] Multi-language support
- [ ] Advanced analytics and ML insights
- [ ] Integration with wearable devices
- [ ] Prescription management system

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

**MedTracker Pro** - Empowering better medication management through technology.
