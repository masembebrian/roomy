"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Shield,
  ShieldCheck,
  Clock,
  Chrome,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Loader2,
  Globe,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { user, updateProfile, signOut, requestVerification } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [verificationLoading, setVerificationLoading] = useState(false)
  const [showVerificationDialog, setShowVerificationDialog] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    location: user?.location || "",
    work: user?.work || "",
    school: user?.school || "",
    languages: user?.languages?.join(", ") || "",
    emergencyContact: user?.emergencyContact || "",
  })

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to view your profile</h1>
            <Link href="/auth/signin">
              <Button>Sign In</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleSaveProfile = async () => {
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      updateProfile({
        name: editForm.name,
        bio: editForm.bio,
        location: editForm.location,
        work: editForm.work,
        school: editForm.school,
        languages: editForm.languages
          .split(",")
          .map((lang) => lang.trim())
          .filter(Boolean),
        emergencyContact: editForm.emergencyContact,
      })

      setSuccess("Profile updated successfully!")
      setIsEditing(false)
      setTimeout(() => setSuccess(""), 3000)
    } catch (err) {
      setError("Failed to update profile. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleRequestVerification = async () => {
    setVerificationLoading(true)
    setError("")

    try {
      const success = await requestVerification()
      if (success) {
        setSuccess(
          "Verification request submitted successfully! We'll review your application within 2-3 business days.",
        )
        setShowVerificationDialog(false)
        setTimeout(() => setSuccess(""), 5000)
      } else {
        setError("Failed to submit verification request. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setVerificationLoading(false)
    }
  }

  const getSignUpMethodIcon = (method: string) => {
    switch (method) {
      case "google":
        return <Chrome className="w-4 h-4" />
      case "phone":
        return <Phone className="w-4 h-4" />
      case "email":
      default:
        return <Mail className="w-4 h-4" />
    }
  }

  const getSignUpMethodLabel = (method: string) => {
    switch (method) {
      case "google":
        return "Google Account"
      case "phone":
        return "Phone Number"
      case "email":
      default:
        return "Email Address"
    }
  }

  const getVerificationBadge = () => {
    switch (user.verificationStatus) {
      case "verified":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return (
          <Badge variant="outline">
            <Shield className="w-3 h-3 mr-1" />
            Unverified
          </Badge>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user.image || "/images/default-avatar.png"} />
                    <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h1 className="text-3xl font-bold">{user.name}</h1>
                      {getVerificationBadge()}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {getSignUpMethodIcon(user.signUpMethod)}
                      <span className="text-sm">{getSignUpMethodLabel(user.signUpMethod)}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {user.joinDate}</span>
                      </div>
                      {user.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{user.location}</span>
                        </div>
                      )}
                    </div>
                    {user.bio && <p className="text-muted-foreground max-w-md">{user.bio}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.verificationStatus === "none" && (
                    <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Shield className="w-4 h-4 mr-2" />
                          Get Verified
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            Get Verified
                          </DialogTitle>
                          <DialogDescription>Increase your credibility and trustworthiness on Roomy</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Verification includes:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>Identity verification</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>Background check</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>Trusted badge on profile</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>Higher booking priority</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-semibold">Verification Fee</h4>
                              <p className="text-sm text-muted-foreground">One-time payment</p>
                            </div>
                            <div className="text-2xl font-bold">$10</div>
                          </div>
                          <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                              Verification typically takes 2-3 business days to complete.
                            </AlertDescription>
                          </Alert>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setShowVerificationDialog(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleRequestVerification} disabled={verificationLoading}>
                            {verificationLoading ? (
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                              <CreditCard className="w-4 h-4 mr-2" />
                            )}
                            Pay & Verify
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="w-4 h-4 mr-2" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="City, Country"
                          value={editForm.location}
                          onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="work">Work</Label>
                        <Input
                          id="work"
                          placeholder="Your profession"
                          value={editForm.work}
                          onChange={(e) => setEditForm({ ...editForm, work: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school">Education</Label>
                        <Input
                          id="school"
                          placeholder="School or university"
                          value={editForm.school}
                          onChange={(e) => setEditForm({ ...editForm, school: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="languages">Languages</Label>
                        <Input
                          id="languages"
                          placeholder="English, Spanish, French"
                          value={editForm.languages}
                          onChange={(e) => setEditForm({ ...editForm, languages: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency">Emergency Contact</Label>
                        <Input
                          id="emergency"
                          placeholder="Name and phone number"
                          value={editForm.emergencyContact}
                          onChange={(e) => setEditForm({ ...editForm, emergencyContact: e.target.value })}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself"
                          value={editForm.bio}
                          onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="md:col-span-2 flex gap-2">
                        <Button onClick={handleSaveProfile} disabled={loading}>
                          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">Full Name</p>
                          </div>
                        </div>
                        {user.location && (
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.location}</p>
                              <p className="text-sm text-muted-foreground">Location</p>
                            </div>
                          </div>
                        )}
                        {user.work && (
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.work}</p>
                              <p className="text-sm text-muted-foreground">Work</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        {user.school && (
                          <div className="flex items-center gap-3">
                            <GraduationCap className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.school}</p>
                              <p className="text-sm text-muted-foreground">Education</p>
                            </div>
                          </div>
                        )}
                        {user.languages && user.languages.length > 0 && (
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.languages.join(", ")}</p>
                              <p className="text-sm text-muted-foreground">Languages</p>
                            </div>
                          </div>
                        )}
                        {user.emergencyContact && (
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{user.emergencyContact}</p>
                              <p className="text-sm text-muted-foreground">Emergency Contact</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Manage your account settings and login methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getSignUpMethodIcon(user.signUpMethod)}
                        <div>
                          <p className="font-medium">{getSignUpMethodLabel(user.signUpMethod)}</p>
                          <p className="text-sm text-muted-foreground">{user.email || user.phone || "Connected"}</p>
                        </div>
                      </div>
                      <Badge variant="outline">Primary</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Verification Status</p>
                          <p className="text-sm text-muted-foreground">
                            {user.verificationStatus === "verified"
                              ? "Your identity has been verified"
                              : user.verificationStatus === "pending"
                                ? "Verification in progress"
                                : "Not verified"}
                          </p>
                        </div>
                      </div>
                      {getVerificationBadge()}
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Member Since</p>
                          <p className="text-sm text-muted-foreground">{user.joinDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and privacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {user.signUpMethod === "email" && (
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-muted-foreground">Last updated: Never</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Change Password
                        </Button>
                      </div>
                    )}

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable 2FA
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Login Activity</p>
                        <p className="text-sm text-muted-foreground">View recent login attempts</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Activity
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your Roomy experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Booking updates and promotions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Currency</p>
                        <p className="text-sm text-muted-foreground">USD - US Dollar</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Language</p>
                        <p className="text-sm text-muted-foreground">English</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Danger Zone */}
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                <div>
                  <p className="font-medium">Sign Out</p>
                  <p className="text-sm text-muted-foreground">Sign out of your account</p>
                </div>
                <Button variant="outline" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                <div>
                  <p className="font-medium text-destructive">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
