import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading, Parallax } from "./primitives";
import { Shot } from "./Mockups";
import { Btn } from "./Btn";
import { CONTACT } from "./Contact";
import { cn } from "@/lib/utils";

type Module = { name: string; flow: string };
type Pack = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  photo: string;
  alt: string;
  modules: Module[];
};

const packs: [Pack, ...Pack[]] = [
  {
    id: "dental",
    label: "Dental Clinic",
    title: "Simple Dental Clinic Software",
    tagline:
      "Affordable, practical software for dental clinics — simple modules and easy project flows.",
    photo: "photo-1629909613654-28e377c37b09",
    alt: "Modern dental clinic treatment room",
    modules: [
      { name: "Patient Management", flow: "Register → Patient Profile → Save History" },
      { name: "Appointment Management", flow: "Select Patient → Select Doctor → Book Date & Time" },
      { name: "Doctor Schedule", flow: "Add Doctor → Set Available Time → View Schedule" },
      { name: "Digital Dental Records", flow: "Open Patient → Add Notes → Save Treatment History" },
      { name: "Dental Tooth Chart", flow: "Select Patient → Select Tooth → Mark Problem → Save" },
      { name: "Treatment Management", flow: "Add Treatment → Set Cost → Update Status" },
      { name: "Billing & Invoice", flow: "Add Service → Calculate Amount → Generate Bill" },
      { name: "Payment Tracking", flow: "Create Bill → Record Payment → Show Balance" },
      { name: "Prescription Management", flow: "Add Medicine → Print / Share Prescription" },
      { name: "Appointment Reminder", flow: "Booked → Reminder → Patient Confirmation" },
      { name: "Patient Follow-up", flow: "Treatment Done → Set Follow-up Date → Reminder" },
      { name: "WhatsApp Notification", flow: "Select Event → Create Message → Send to Patient" },
      { name: "Medicine / Material Stock", flow: "Add Item → Add Stock → Use Item → Balance" },
      { name: "Income & Pending Report", flow: "Billing + Payments → Calculate → Show Income" },
      { name: "Clinic Dashboard", flow: "Appointments → Patients → Income → Pending" },
    ],
  },
  {
    id: "grocery",
    label: "Grocery Shop",
    title: "Simple Grocery Shop Software",
    tagline: "Affordable and easy software modules for small grocery shops and supermarkets.",
    photo: "photo-1580913428735-bd3c269d6a82",
    alt: "Grocery shop shelves stocked with products",
    modules: [
      { name: "Product Management", flow: "Add Product → Set Price → Save" },
      { name: "Billing / POS", flow: "Select Products → Calculate Total → Print Bill" },
      { name: "Barcode Billing", flow: "Scan Barcode → Add Product → Generate Bill" },
      { name: "Stock Management", flow: "Add Stock → Sell Product → Reduce Stock" },
      { name: "Low Stock Alert", flow: "Check Stock → Find Low Items → Send Alert" },
      { name: "Purchase & Supplier", flow: "Add Supplier → Add Products → Record Purchase" },
      { name: "Customer Credit / Udhaar", flow: "Record Credit → Record Payment → Balance" },
      { name: "Payment Management", flow: "Select Bill → Cash / UPI / Card → Save Payment" },
      { name: "Expense Management", flow: "Add Expense → Select Category → Save" },
      { name: "Sales & Profit Report", flow: "Sales + Purchase Cost → Calculate → Profit" },
      { name: "Expiry Tracking", flow: "Add Expiry Date → Check → Alert Before Expiry" },
      { name: "Offer / Discount", flow: "Select Product → Add Discount → Apply at Billing" },
      { name: "WhatsApp Bill & Offers", flow: "Generate Bill → Send to Customer" },
      { name: "Daily Closing & Cash", flow: "Opening Cash → Sales → Expenses → Closing" },
      { name: "Shop Dashboard", flow: "Sales → Stock → Credit → Expenses → Profit" },
    ],
  },
  {
    id: "studio",
    label: "Photo & Makeup Studio",
    title: "Photo, Makeup & Studio Software",
    tagline: "Easy modules for photography studios, makeup artists and beauty / event studios.",
    photo: "photo-1493863641943-9b68992a8d07",
    alt: "Photography studio with professional lighting setup",
    modules: [
      { name: "Customer Management", flow: "Add Customer → Save Details → View History" },
      { name: "Booking Management", flow: "Select Service → Select Date / Time → Confirm" },
      { name: "Calendar & Schedule", flow: "View Calendar → Check Slot → Manage Booking" },
      { name: "Photography Packages", flow: "Add Package → Set Price → Assign Services" },
      { name: "Makeup Packages", flow: "Add Package → Set Price → Select Service" },
      { name: "Inquiry Management", flow: "Receive Inquiry → Add Customer → Follow Up" },
      { name: "Advance & Payment", flow: "Create Booking → Record Advance → Balance" },
      { name: "Billing & Invoice", flow: "Select Booking → Add Services → Generate Bill" },
      { name: "Photographer / Artist Duty", flow: "Add Staff → Availability → Assign Event" },
      { name: "Event Management", flow: "Add Event → Assign Team → Track Status" },
      { name: "Photo Delivery Tracking", flow: "Shoot Done → Select Photos → Delivery Status" },
      { name: "Digital Album & Gallery", flow: "Select Photos → Create Album → Share Link" },
      { name: "WhatsApp Confirmation", flow: "Booking Created → Message → Confirmation" },
      { name: "Customer Feedback", flow: "Service Done → Send Request → View Response" },
      { name: "Studio Dashboard", flow: "Bookings → Customers → Payments → Sales" },
    ],
  },
  {
    id: "institute",
    label: "School & College",
    title: "Student, Attendance & Payroll Software",
    tagline:
      "Complete management for schools, colleges, institutes and any team with staff on the payroll.",
    photo: "photo-1523240795612-9a054b0db644",
    alt: "Students studying together in a classroom",
    modules: [
      { name: "Student Registration", flow: "Enter Details → Assign Class → Save Profile" },
      { name: "Admission Management", flow: "Enquiry → Admission Form → Allot Roll No." },
      { name: "Class & Batch Management", flow: "Create Class → Add Subjects → Assign Staff" },
      { name: "Daily Attendance", flow: "Select Class → Mark Present / Absent → Save" },
      { name: "Biometric / QR Attendance", flow: "Scan → Auto Mark → Sync Report" },
      { name: "Absent WhatsApp Alert", flow: "Mark Absent → Auto Message → Parent" },
      { name: "Timetable Management", flow: "Add Periods → Assign Teacher → Publish" },
      { name: "Fee Structure & Collection", flow: "Set Fee → Collect → Print Receipt" },
      { name: "Fee Due & Defaulter Report", flow: "Check Fees → Find Balance → Reminder" },
      { name: "Exam, Marks & Marksheet", flow: "Enter Marks → Calculate Grade → Print" },
      { name: "Staff Records & Attendance", flow: "Punch In / Out → Calculate Hours → Save" },
      { name: "Leave Management", flow: "Apply Leave → Approve → Update Balance" },
      { name: "Monthly Payroll Run", flow: "Attendance → Calculate → Approve → Pay" },
      { name: "Payslip, PF, ESI & TDS", flow: "Apply Rules → Auto Deduct → Payslip" },
      { name: "Admin Dashboard", flow: "Students → Attendance → Fees → Payroll" },
    ],
  },
  {
    id: "hospital",
    label: "Hospital & Clinic",
    title: "Hospital & Multi-Speciality Clinic Software",
    tagline: "OP, IP, pharmacy and lab in one system for hospitals, clinics and nursing homes.",
    photo: "photo-1519494026892-80bbd2d6fd0d",
    alt: "Hospital corridor with clean modern interiors",
    modules: [
      { name: "Patient Registration", flow: "Register → Assign UHID → Save Profile" },
      { name: "OP Token & Queue", flow: "Register → Issue Token → Call Patient" },
      { name: "Doctor Consultation", flow: "Open Case Sheet → Diagnosis → Save" },
      { name: "IP Admission & Bed", flow: "Admit → Allot Bed → Track Days" },
      { name: "Pharmacy Billing", flow: "Select Medicine → Bill → Reduce Stock" },
      { name: "Lab Test Management", flow: "Order Test → Enter Result → Print Report" },
      { name: "Scan / X-Ray Records", flow: "Upload Report → Attach to Patient → View" },
      { name: "Insurance & Scheme", flow: "Select Scheme → Approve → Adjust Bill" },
      { name: "Discharge Summary", flow: "Treatment → Generate Summary → Print" },
      { name: "Duty Roster", flow: "Add Staff → Assign Shift → Publish Roster" },
      { name: "Medicine Stock & Expiry", flow: "Add Stock → Alert on Expiry → Reorder" },
      { name: "Billing & Payment", flow: "Add Services → Generate Bill → Collect" },
      { name: "WhatsApp Reports", flow: "Report Ready → Send Link → Patient Views" },
      { name: "Income & Department Report", flow: "Collect Data → Calculate → Report" },
      { name: "Hospital Dashboard", flow: "OP → IP → Pharmacy → Lab → Income" },
    ],
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    title: "Medical Shop & Pharmacy Software",
    tagline: "Batch-wise, expiry-safe billing built for medical shops and pharmacy chains.",
    photo: "photo-1587854692152-cbe660dbde88",
    alt: "Pharmacy shelves filled with medicines",
    modules: [
      { name: "Medicine Master", flow: "Add Medicine → Salt & Rack → Save" },
      { name: "Batch & Expiry Billing", flow: "Select Batch → Check Expiry → Bill" },
      { name: "GST Invoice", flow: "Add Items → Apply GST → Print Invoice" },
      { name: "Purchase Entry", flow: "Supplier Bill → Enter Batches → Update Stock" },
      { name: "Supplier Payments", flow: "Purchase → Record Payment → Outstanding" },
      { name: "Stock & Rack Location", flow: "Search Medicine → Show Rack & Qty" },
      { name: "Near-Expiry Alert", flow: "Check Batches → Alert 90 Days → Return" },
      { name: "Sales Return", flow: "Select Bill → Return Item → Refund / Credit" },
      { name: "Doctor-wise Sales", flow: "Tag Doctor → Sales → Report" },
      { name: "Customer Credit", flow: "Record Credit → Payment → Balance" },
      { name: "Substitute Suggestion", flow: "Out of Stock → Show Same Salt Options" },
      { name: "Reorder List", flow: "Min Level → Auto List → Send to Supplier" },
      { name: "WhatsApp Refill Reminder", flow: "Course Ends → Message → Repeat Order" },
      { name: "Daily Sales & Profit", flow: "Sales + Cost → Calculate → Report" },
      { name: "Pharmacy Dashboard", flow: "Sales → Stock → Expiry → Dues" },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant & Hotel",
    title: "Restaurant, Hotel & Catering Software",
    tagline: "Table orders, KOT, delivery and room bookings for hotels and restaurants.",
    photo: "photo-1517248135467-4c7edcad34c4",
    alt: "Busy restaurant dining hall with tables",
    modules: [
      { name: "Menu Management", flow: "Add Item → Set Price → Category" },
      { name: "Table Order / Dine-in", flow: "Select Table → Take Order → Save" },
      { name: "KOT to Kitchen", flow: "Order → Print KOT → Kitchen Prepares" },
      { name: "Parcel & Delivery", flow: "Take Order → Assign Boy → Track" },
      { name: "Quick Billing", flow: "Order → Add Tax → Print Bill" },
      { name: "Room Booking (Hotel)", flow: "Check Availability → Book → Check-in" },
      { name: "Advance & Settlement", flow: "Advance → Add Services → Final Bill" },
      { name: "Kitchen Stock", flow: "Add Raw Material → Use → Balance" },
      { name: "Recipe / Consumption", flow: "Sale → Deduct Ingredients → Report" },
      { name: "Staff & Shift", flow: "Add Staff → Assign Shift → Attendance" },
      { name: "Online Order Entry", flow: "Receive Order → Confirm → Bill" },
      { name: "Discount & Coupons", flow: "Create Offer → Apply → Track Usage" },
      { name: "Customer Feedback", flow: "After Bill → Send Request → View" },
      { name: "Daily Sales Report", flow: "Bills → Calculate → Day Close" },
      { name: "Owner Dashboard", flow: "Sales → Items → Staff → Profit" },
    ],
  },
  {
    id: "textile",
    label: "Textile & Fashion",
    title: "Textile, Garment & Fashion Shop Software",
    tagline: "Size, colour and design-wise stock control for textile and fancy stores.",
    photo: "photo-1441986300917-64674bd600d8",
    alt: "Clothing displayed inside a fashion retail store",
    modules: [
      { name: "Item & Design Master", flow: "Add Design → Size & Colour → Price" },
      { name: "Barcode & Tag Printing", flow: "Create Item → Print Tag → Stick" },
      { name: "Fast Billing", flow: "Scan Tag → Add Items → Print Bill" },
      { name: "Size-wise Stock", flow: "Purchase → Size Matrix → Live Stock" },
      { name: "Purchase & Supplier", flow: "Add Supplier → Enter Bill → Stock Up" },
      { name: "Sales Return / Exchange", flow: "Select Bill → Exchange → Adjust" },
      { name: "Season Offer & Discount", flow: "Create Offer → Apply at Billing" },
      { name: "Customer Loyalty", flow: "Purchase → Add Points → Redeem" },
      { name: "Tailoring Order", flow: "Take Measurement → Delivery Date → Track" },
      { name: "Staff Sales Target", flow: "Set Target → Track Sales → Incentive" },
      { name: "GST Reports", flow: "Sales + Purchase → GST → Export" },
      { name: "Dead Stock Report", flow: "Check Movement → List Slow Items" },
      { name: "WhatsApp New Arrivals", flow: "Add Photos → Select Customers → Send" },
      { name: "Profit & Margin Report", flow: "Sale − Cost → Margin → Report" },
      { name: "Store Dashboard", flow: "Sales → Stock → Returns → Profit" },
    ],
  },
  {
    id: "gym",
    label: "Gym & Fitness",
    title: "Gym, Yoga & Fitness Studio Software",
    tagline: "Memberships, renewals and trainer schedules handled automatically.",
    photo: "photo-1534438327276-14e5300c3a48",
    alt: "Gym interior with modern fitness equipment",
    modules: [
      { name: "Member Registration", flow: "Add Member → Photo & ID → Save" },
      { name: "Membership Plans", flow: "Create Plan → Set Duration → Price" },
      { name: "Fee & Renewal", flow: "Collect Fee → Set Expiry → Receipt" },
      { name: "Expiry Reminder", flow: "Plan Ending → Auto WhatsApp → Renew" },
      { name: "Member Attendance", flow: "Scan / Punch → Mark Entry → Report" },
      { name: "Trainer Management", flow: "Add Trainer → Assign Members → Track" },
      { name: "Batch & Slot Booking", flow: "Create Batch → Book Slot → Confirm" },
      { name: "Diet & Workout Plan", flow: "Create Plan → Assign → Share" },
      { name: "Body Measurement Log", flow: "Enter Weight / BMI → Track Progress" },
      { name: "Personal Training Bill", flow: "Select PT → Add Sessions → Bill" },
      { name: "Supplement Sales", flow: "Add Product → Sell → Reduce Stock" },
      { name: "Expense Management", flow: "Add Expense → Category → Report" },
      { name: "Staff Salary", flow: "Attendance → Calculate → Payslip" },
      { name: "Collection Report", flow: "Fees + Sales → Calculate → Report" },
      { name: "Gym Dashboard", flow: "Members → Renewals → Dues → Income" },
    ],
  },
  {
    id: "salon",
    label: "Salon & Spa",
    title: "Salon, Spa & Beauty Parlour Software",
    tagline: "Appointments, stylist commission and packages for salons and spas.",
    photo: "photo-1560066984-138dadb4c035",
    alt: "Modern hair salon with styling chairs",
    modules: [
      { name: "Service Master", flow: "Add Service → Set Price & Time" },
      { name: "Appointment Booking", flow: "Select Service → Stylist → Time Slot" },
      { name: "Walk-in Billing", flow: "Add Services → Calculate → Print Bill" },
      { name: "Stylist Schedule", flow: "Add Stylist → Availability → Assign" },
      { name: "Membership & Packages", flow: "Sell Package → Track Sessions Used" },
      { name: "Prepaid Wallet", flow: "Recharge → Use at Billing → Balance" },
      { name: "Stylist Commission", flow: "Service Done → Calculate % → Payout" },
      { name: "Product Stock", flow: "Add Product → Use / Sell → Balance" },
      { name: "Customer History", flow: "Open Customer → Past Services → Notes" },
      { name: "WhatsApp Reminder", flow: "Booking → Reminder → Confirmation" },
      { name: "Offers & Coupons", flow: "Create Offer → Apply → Track" },
      { name: "Feedback & Rating", flow: "After Visit → Request → View Rating" },
      { name: "Staff Attendance", flow: "Punch In / Out → Hours → Salary" },
      { name: "Daily Collection", flow: "Bills → Cash / UPI → Day Close" },
      { name: "Salon Dashboard", flow: "Bookings → Services → Staff → Income" },
    ],
  },
  {
    id: "auto",
    label: "Auto Service",
    title: "Automobile Service & Spare Parts Software",
    tagline: "Job cards, spares and service reminders for garages and showrooms.",
    photo: "photo-1486262715619-67b85e0b08d3",
    alt: "Car service garage with vehicle on a lift",
    modules: [
      { name: "Vehicle & Owner Master", flow: "Add Vehicle → Owner → History" },
      { name: "Job Card Creation", flow: "Vehicle In → Complaints → Open Job Card" },
      { name: "Mechanic Assignment", flow: "Job Card → Assign Mechanic → Track" },
      { name: "Spare Parts Stock", flow: "Add Part → Issue to Job → Balance" },
      { name: "Labour Charges", flow: "Add Work → Set Rate → Add to Bill" },
      { name: "Estimate & Approval", flow: "Create Estimate → Send → Approve" },
      { name: "Service Billing", flow: "Parts + Labour → GST → Invoice" },
      { name: "Insurance Claim Job", flow: "Select Insurer → Claim Details → Bill" },
      { name: "Delivery & Gate Pass", flow: "Work Done → Payment → Gate Pass" },
      { name: "Service Reminder", flow: "Next Due Date → WhatsApp → Book" },
      { name: "Purchase & Supplier", flow: "Order Parts → Receive → Stock Up" },
      { name: "Warranty Tracking", flow: "Record Warranty → Check on Claim" },
      { name: "Mechanic Incentive", flow: "Jobs Done → Calculate → Payout" },
      { name: "Sales & Profit Report", flow: "Parts + Labour − Cost → Profit" },
      { name: "Garage Dashboard", flow: "Job Cards → Pending → Billing → Income" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware & Building",
    title: "Hardware, Paint & Building Material Software",
    tagline: "Multi-unit billing, credit control and delivery for hardware businesses.",
    photo: "photo-1503387762-592deb58ef4e",
    alt: "Construction and building materials at a site",
    modules: [
      { name: "Item Master (Multi-Unit)", flow: "Add Item → Kg / Nos / Box → Price" },
      { name: "Quotation", flow: "Select Items → Add Rate → Send Quote" },
      { name: "GST Billing", flow: "Add Items → Apply GST → Invoice" },
      { name: "Credit / Party Ledger", flow: "Sale on Credit → Payment → Balance" },
      { name: "Purchase Entry", flow: "Supplier Bill → Enter Items → Stock" },
      { name: "Stock Management", flow: "Purchase → Sale → Live Stock" },
      { name: "Rate List by Customer", flow: "Set Special Rate → Auto Apply" },
      { name: "Delivery Challan", flow: "Create Challan → Deliver → Convert Bill" },
      { name: "Site-wise Supply", flow: "Add Site → Track Supplies → Report" },
      { name: "Payment Follow-up", flow: "Outstanding → Reminder → Collect" },
      { name: "Damage / Return", flow: "Record Return → Adjust Stock & Bill" },
      { name: "Transport Charges", flow: "Add Freight → Include in Bill" },
      { name: "GST Reports", flow: "Sales + Purchase → GSTR Export" },
      { name: "Profit Report", flow: "Sale − Purchase Cost → Margin" },
      { name: "Shop Dashboard", flow: "Sales → Stock → Credit → Profit" },
    ],
  },
  {
    id: "jewellery",
    label: "Jewellery",
    title: "Jewellery Shop & Chit Scheme Software",
    tagline: "Rate-based billing, making charges, old gold exchange and savings schemes.",
    photo: "photo-1515562141207-7a88fb7ce338",
    alt: "Gold jewellery displayed in a showroom",
    modules: [
      { name: "Daily Gold / Silver Rate", flow: "Enter Rate → Auto Apply in Billing" },
      { name: "Item & Purity Master", flow: "Add Item → 22K / 18K → Weight" },
      { name: "Weight-based Billing", flow: "Weight × Rate + Making → Bill" },
      { name: "Making & Wastage", flow: "Set % → Auto Calculate → Add" },
      { name: "Old Gold Exchange", flow: "Weigh Old Gold → Deduct → Balance" },
      { name: "Hallmark & HUID Record", flow: "Enter HUID → Attach to Item" },
      { name: "Tag & Barcode", flow: "Create Tag → Print → Scan at Billing" },
      { name: "Stock by Weight", flow: "Purchase → Sale → Weight Balance" },
      { name: "Chit / Savings Scheme", flow: "Enroll → Monthly Pay → Maturity" },
      { name: "Advance Booking", flow: "Book Item → Advance → Delivery" },
      { name: "Repair / Order Work", flow: "Take Order → Karigar → Delivery" },
      { name: "Customer History", flow: "Open Customer → Purchases → Scheme" },
      { name: "GST Invoice & Reports", flow: "Bill → GST → Export Report" },
      { name: "Profit Report", flow: "Sale − Cost − Wastage → Profit" },
      { name: "Showroom Dashboard", flow: "Rate → Sales → Stock → Scheme" },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    title: "Real Estate & Property Management Software",
    tagline: "Plots, flats, leads and EMI collection for builders and property agents.",
    photo: "photo-1560518883-ce09059eeffa",
    alt: "Modern residential apartment building",
    modules: [
      { name: "Property Master", flow: "Add Plot / Flat → Size → Price" },
      { name: "Project & Block Layout", flow: "Add Project → Blocks → Units" },
      { name: "Lead Management", flow: "Enquiry → Assign Agent → Follow Up" },
      { name: "Site Visit Scheduling", flow: "Book Visit → Remind → Feedback" },
      { name: "Booking & Agreement", flow: "Book Unit → Advance → Agreement" },
      { name: "Installment / EMI Plan", flow: "Set Schedule → Due → Collect" },
      { name: "Payment Receipt", flow: "Collect → Receipt → Ledger Update" },
      { name: "Due Reminder", flow: "Due Date → WhatsApp → Follow Up" },
      { name: "Agent Commission", flow: "Deal Closed → Calculate → Payout" },
      { name: "Availability Chart", flow: "Live View → Sold / Open / Booked" },
      { name: "Document Vault", flow: "Upload Docs → Attach to Customer" },
      { name: "Rental Management", flow: "Add Tenant → Rent Due → Collect" },
      { name: "Expense Tracking", flow: "Add Expense → Project-wise → Report" },
      { name: "Sales Report", flow: "Bookings + Collection → Report" },
      { name: "Builder Dashboard", flow: "Leads → Bookings → Collection → Dues" },
    ],
  },
  {
    id: "transport",
    label: "Transport & Logistics",
    title: "Transport, Fleet & Logistics Software",
    tagline: "Trips, drivers, fuel and freight billing for lorry and travel operators.",
    photo: "photo-1519003722824-194d4455a60c",
    alt: "Transport truck fleet on the highway",
    modules: [
      { name: "Vehicle Master", flow: "Add Vehicle → Documents → Save" },
      { name: "Driver Management", flow: "Add Driver → Licence → Assign" },
      { name: "Trip / Load Entry", flow: "Create Trip → From-To → Assign Vehicle" },
      { name: "Lorry Receipt (LR)", flow: "Enter Goods → Generate LR → Print" },
      { name: "Freight Billing", flow: "Trip → Rate × Weight → Invoice" },
      { name: "Fuel & Diesel Log", flow: "Fill Fuel → Enter KM → Mileage" },
      { name: "Trip Expense", flow: "Toll / Food / Repair → Add → Total" },
      { name: "Driver Advance (Bhatta)", flow: "Give Advance → Settle on Return" },
      { name: "Maintenance Schedule", flow: "Set Service KM → Alert → Record" },
      { name: "Document Expiry Alert", flow: "Insurance / FC → Alert → Renew" },
      { name: "Party Ledger", flow: "Bill → Payment → Outstanding" },
      { name: "GPS / Status Update", flow: "Update Status → Inform Party" },
      { name: "Trip Profit", flow: "Freight − Expenses → Profit per Trip" },
      { name: "Driver Salary", flow: "Trips + Attendance → Salary → Payslip" },
      { name: "Fleet Dashboard", flow: "Trips → Vehicles → Income → Dues" },
    ],
  },
];

export function Packages() {
  const [active, setActive] = useState<string>(packs[0]!.id);
  const pack: Pack = packs.find((p) => p.id === active) ?? packs[0]!;

  return (
    <section id="packages" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow={`${packs.length} business packages`}
          title={
            <>
              Software Services We <span className="text-gradient">Provide</span>
            </>
          }
          subtitle={`Choose your business and see the 15 most important modules we deliver — perfectly organised, with the exact work flow for each one.`}
        />

        <Reveal className="mt-12" dir="zoom">
          <div className="glass -mx-1 flex gap-1.5 overflow-x-auto rounded-3xl p-1.5 [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            {packs.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                aria-pressed={active === p.id}
                className={cn(
                  "shrink-0 rounded-2xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 sm:text-sm",
                  active === p.id
                    ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]"
                    : "text-muted-foreground hover:-translate-y-0.5 hover:text-foreground",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={pack.id} className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.45fr]">
          <div className="animate-fade-in glass self-start rounded-3xl p-5 lg:sticky lg:top-24">
            <Parallax speed={14}>
              <Shot id={pack.photo} alt={pack.alt} ratio="aspect-[4/3]" w={1200} />
            </Parallax>
            <h3 className="mt-5 text-2xl font-bold text-balance">{pack.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{pack.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {pack.modules.length} important services
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Btn asChild>
                <a href="#contact">
                  Get a Quote <ArrowRight />
                </a>
              </Btn>
              <Btn asChild variant="ghostGlass">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </Btn>
            </div>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {pack.modules.map((m, i) => (
              <li
                key={m.name}
                style={{ animationDelay: `${Math.min(i * 45, 500)}ms` }}
                className="glass group animate-slide-in-right rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <Check className="size-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">
                      <span className="text-muted-foreground">{i + 1}. </span>
                      {m.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{m.flow}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
