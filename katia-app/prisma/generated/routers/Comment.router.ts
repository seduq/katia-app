import { t, publicProcedure } from "./helpers/createRouter";
import { CommentCreateOneSchema } from "../schemas/createOneComment.schema";
import { CommentDeleteOneSchema } from "../schemas/deleteOneComment.schema";
import { CommentFindFirstSchema } from "../schemas/findFirstComment.schema";
import { CommentFindManySchema } from "../schemas/findManyComment.schema";
import { CommentFindUniqueSchema } from "../schemas/findUniqueComment.schema";
import { CommentUpdateOneSchema } from "../schemas/updateOneComment.schema";
import { CommentUpsertSchema } from "../schemas/upsertOneComment.schema";

export const commentsRouter = t.router({
  createOneComment: publicProcedure
    .input(CommentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneComment = await ctx.prisma.comment.create(input);
      return createOneComment;
    }),
  deleteOneComment: publicProcedure
    .input(CommentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneComment = await ctx.prisma.comment.delete(input);
      return deleteOneComment;
    }),
  findFirstComment: publicProcedure
    .input(CommentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstComment = await ctx.prisma.comment.findFirst(input);
      return findFirstComment;
    }),
  findManyComment: publicProcedure
    .input(CommentFindManySchema).query(async ({ ctx, input }) => {
      const findManyComment = await ctx.prisma.comment.findMany(input);
      return findManyComment;
    }),
  findUniqueComment: publicProcedure
    .input(CommentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueComment = await ctx.prisma.comment.findUnique(input);
      return findUniqueComment;
    }),
  updateOneComment: publicProcedure
    .input(CommentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneComment = await ctx.prisma.comment.update(input);
      return updateOneComment;
    }),
  upsertOneComment: publicProcedure
    .input(CommentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneComment = await ctx.prisma.comment.upsert(input);
      return upsertOneComment;
    }),

}) 
