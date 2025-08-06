import { addUser, fetchAllUsers } from '../services/userService.ts';

export async function createUser(req: any, res: any) {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({
        success: false,
        message: "Username and email are required"
      });
    }

    await addUser(username, email);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully"
    })

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to create user",
      error: err instanceof Error ? err.message: "Unknown error"

    })
  }
}

export async function getUsers(req: any, res: any) {
  try {
    const users = await fetchAllUsers();
    return res.status(200).json({
      success: true,
      data: users
    });
    
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: err instanceof Error ? err.message : "Unknown error"
    })

  }
}