const Gym = require("../model/gym.model");

exports.addMember = async (req, res) => {
    try {
        const member = await Gym.create(req.body);
        res.status(201).json({
            success: true,
            message: "Gym member added successfully",
            data: member
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


exports.getAllMembers = async (req, res) => {
    try {
        const members = await Gym.find();
        res.status(200).json({
            success: true,
            count: members.length,
            data: members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getMemberById = async (req, res) => {
    try {
        const member = await Gym.findById(req.params.id);
        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateMember = async (req, res) => {
    try {
        const member = await Gym.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member updated successfully",
            data: member
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        const member = await Gym.findByIdAndDelete(req.params.id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Member deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
